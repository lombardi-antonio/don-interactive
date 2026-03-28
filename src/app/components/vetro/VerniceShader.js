'use client';

import { useEffect, useRef } from 'react';

const VERTEX_SRC = `#version 300 es
in vec2 a_position;
out vec2 uv;
void main() {
  uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Acrylic pour: two passes of domain warping feed into layered sinusoids,
// remapped through a cosine colour palette.
const FRAGMENT_SRC = `#version 300 es
precision highp float;

in vec2 uv;
out vec4 out_color;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec4  u_mouse;
uniform float u_dark_mode;
uniform vec3  u_base_color;
uniform vec3  u_target_color;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// Light mode: oscillates from base toward target (cos=1 reaches target exactly)
vec3 palette_light(float t) {
  vec3 a = u_base_color;
  vec3 b = u_target_color - u_base_color;
  vec3 c = vec3(1.00, 1.00, 1.00);
  vec3 d = vec3(0.00, 0.00, 0.05);
  return a + b * cos(6.28318 * (c * t + d));
}

// Dark mode: darkened base, oscillates toward a very dark shade of target
vec3 palette_dark(float t) {
  vec3 a = u_base_color * 0.4;
  vec3 b = u_target_color * 0.15 - a;
  vec3 c = vec3(1.00, 1.00, 1.00);
  vec3 d = vec3(0.00, 0.00, 0.05);
  return a + b * cos(6.28318 * (c * t + d));
}

vec3 palette(float t) {
  return mix(palette_light(t), palette_dark(t), u_dark_mode);
}

void main() {
  // Aspect-correct so streaks aren't squashed on wide screens
  vec2 p = uv;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.08;

  // ── Pass 1: large-scale undulations ──────────────────────────────────────
  vec2 q;
  q.x = sin(p.y * 1.8 + t * 1.1) + sin(p.x * 2.4 + t * 0.7);
  q.y = cos(p.x * 1.6 + t * 0.9) + cos(p.y * 2.1 + t * 1.3);

  // ── Pass 2: finer streaks fed by pass 1 ──────────────────────────────────
  vec2 r;
  r.x = sin((p.x + q.x * 0.4) * 3.5 + t * 0.6);
  r.y = cos((p.y + q.y * 0.4) * 3.5 + t * 0.8);

  vec2 wp = p + q * 0.25 + r * 0.08;

  // ── Streak value: layered sinusoids at different frequencies ──────────────
  float s  = sin(wp.x * 2.5  + wp.y *  2.0);
  s += 0.50 * sin(wp.x * 4.5  - wp.y *  3.5 + t * 0.4);
  s += 0.25 * sin(wp.x * 1.5  + wp.y *  5.5 + t * 0.2);

  s = s * 0.5 + 0.5;

  // Quantise into bands; blur width driven by screen-space band density:
  // narrow/close bands → high gradient → sharp edge
  // wide/sparse bands  → low gradient  → blurry edge
  float bands     = 12.0;
  float sf        = s * bands;
  float grad      = length(vec2(dFdx(sf), dFdy(sf)));
  // Zero blur below closeThreshold (sharp), ramps to full blur above farThreshold
  float blurWidth = clamp(0.5 / (grad + 0.3), 0.0, 0.48)
                    * step(grad, 0.1);
  s = (floor(sf) + smoothstep(0.0, blurWidth, fract(sf))) / bands;

  vec3 col = palette(s);

  // Subtle film grain — changes each frame via u_time
  float grain = hash(uv * u_resolution + floor(u_time * 20.0));
  col += (grain - 0.5) * 0.03;

  out_color = vec4(col, 1.0);
}
`;

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function compileShader(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vs, fs) {
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

// Default #99debd ≈ vec3(0.60, 0.87, 0.74) — the original mint
export default function VerniceShader({ className = '', color = '#99debd', targetColor = '#ffffff' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    const program = createProgram(gl, vs, fs);
    if (!program) return;

    gl.useProgram(program);

    // Full-screen quad
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime       = gl.getUniformLocation(program, 'u_time');
    const uMouse      = gl.getUniformLocation(program, 'u_mouse');
    const uDarkMode   = gl.getUniformLocation(program, 'u_dark_mode');
    const uBaseColor   = gl.getUniformLocation(program, 'u_base_color');
    const uTargetColor = gl.getUniformLocation(program, 'u_target_color');

    const [r, g, b] = hexToRgb(color);
    gl.uniform3f(uBaseColor, r, g, b);
    const [tr, tg, tb] = hexToRgb(targetColor);
    gl.uniform3f(uTargetColor, tr, tg, tb);

    const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
    const onSchemeChange = () => {
      gl.useProgram(program);
      gl.uniform1f(uDarkMode, darkMQ.matches ? 1.0 : 0.0);
    };
    onSchemeChange();
    darkMQ.addEventListener('change', onSchemeChange);

    const mouse = [0, 0, 0, 0];
    const onMouseMove = (e) => { mouse[0] = e.clientX; mouse[1] = e.clientY; };
    const onMouseDown = () => { mouse[2] = 1; };
    const onMouseUp   = () => { mouse[2] = 0; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const resize = () => {
      canvas.width  = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const FRAME_INTERVAL = 1000 / 20;
    const startTime = performance.now();
    let rafId;
    let lastTime = 0;

    const render = (timestamp) => {
      rafId = requestAnimationFrame(render);
      if (timestamp - lastTime < FRAME_INTERVAL) return;
      lastTime = timestamp;

      const elapsed = (performance.now() - startTime) / 1000;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform4f(uMouse, mouse[0], mouse[1], mouse[2], mouse[3]);
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      darkMQ.removeEventListener('change', onSchemeChange);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(vbo);
      gl.deleteVertexArray(vao);
    };
  }, [color, targetColor]);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/grid.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          mixBlendMode: 'multiply',
          opacity: 1,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
