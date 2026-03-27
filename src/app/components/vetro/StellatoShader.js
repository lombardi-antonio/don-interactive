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

// Stellato: black background with a milky-way cloud band (background, slow scroll)
// and big twinkling stars in the foreground (faster scroll) for a parallax effect.
const FRAGMENT_SRC = `#version 300 es
precision highp float;

in vec2 uv;
out vec4 out_color;

uniform vec2  u_resolution;
uniform float u_time;

// ── Hashing ──────────────────────────────────────────────────────────────────

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// ── Smooth value noise ────────────────────────────────────────────────────────

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// 5-octave FBM
float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    v   += amp * vnoise(p);
    p   *= 2.1;
    amp *= 0.48;
  }
  return v;
}

// ── Milky-way band ────────────────────────────────────────────────────────────

vec3 milkyWay(vec2 p, float t) {
  // Gently curved band across the screen
  float band = uv.y - 0.45 + sin(uv.x * 3.14159 + 0.4) * 0.09
                            + cos(uv.x * 1.8 - 0.9)    * 0.05;
  float bandMask = exp(-band * band * 10.0);

  // Layered FBM clouds within the band
  vec2 q = p * 2.5;
  float cloud  = fbm(q + t * 0.12)           * bandMask;
  cloud       += fbm(q * 1.9 + 5.3 + t * 0.07) * bandMask * 0.55;
  cloud       += fbm(q * 4.1 + 2.7 + t * 0.04) * bandMask * 0.25;
  cloud        = clamp(cloud * 1.3, 0.0, 1.0);

  // Slight halo outside the core band
  float halo   = exp(-band * band * 1.8) * 0.12;
  cloud       += halo * fbm(p * 1.2 + t * 0.05);

  // Blend position along the band drives the green→blue gradient
  // Use a second fbm layer so the colour boundary is irregular, not a hard line
  float colorShift = fbm(p * 1.8 + 3.1 + t * 0.03);
  float blend = clamp(colorShift * 1.4 - 0.2, 0.0, 1.0);

  // Muted green (left/outer) and muted teal-blue (right/inner) — both very faded
  vec3 greenTint = vec3(0.10, 0.28, 0.16);
  vec3 blueTint  = vec3(0.08, 0.18, 0.38);
  vec3 cloudColor = mix(greenTint, blueTint, blend);

  vec3 col = mix(vec3(0.0), cloudColor, cloud * 0.75);

  // Thin brighter cyan spine at the band's densest core
  float core = exp(-band * band * 35.0);
  col += vec3(0.04, 0.14, 0.22) * core * cloud * 0.6;

  return col;
}

// ── Dense background micro-stars (slow scroll) ────────────────────────────────

vec3 bgStars(vec2 p) {
  float density = 100.0;
  vec2  cell    = floor(p * density);
  vec2  cellUV  = fract(p * density) - 0.5;

  float h  = hash21(cell);
  // ~35 % of cells light up
  float on = step(0.65, h);
  float sz = 0.04 + hash21(cell + 3.7) * 0.05;
  float s  = smoothstep(sz, sz * 0.3, length(cellUV));
  float br = (0.3 + hash21(cell + 1.1) * 0.5) * on;

  return vec3(s * br * 0.7);
}

// ── Big foreground twinkling stars (fast scroll) ──────────────────────────────

vec3 fgStars(vec2 p, float t) {
  float density = 28.0;
  vec2  cell    = floor(p * density);
  vec2  cellUV  = fract(p * density) - 0.5;

  float h = hash21(cell);
  // ~22 % of cells become big stars
  float on = step(0.78, h);

  // Per-star twinkle: smooth pulse up and down
  float freq  = 0.6 + hash21(cell + 5.1) * 2.2;
  float phase = hash21(cell + 8.3) * 6.28318;
  float pulse = 0.5 + 0.5 * sin(t * freq + phase);
  // Sharpen pulse so dim moments are darker and bright peaks are vivid
  float twinkle = pow(pulse, 2.5) * 0.85 + 0.15;

  // Core disc
  float sz   = 0.05 + hash21(cell + 2.9) * 0.09;
  float dist = length(cellUV);
  float core = smoothstep(sz, sz * 0.15, dist);

  // Soft glow halo
  float glow = exp(-dist * 12.0) * 0.45;

  // Four-point diffraction spikes
  float spike = (exp(-abs(cellUV.x) * 50.0) * exp(-abs(cellUV.y) * 10.0)
               + exp(-abs(cellUV.y) * 50.0) * exp(-abs(cellUV.x) * 10.0)) * 0.5;

  float total = (core + glow + spike) * twinkle * on;

  // Color: cool blue-white to warm cream depending on the star
  float ct = hash21(cell + 0.5);
  vec3 col = mix(vec3(0.85, 0.92, 1.0), vec3(1.0, 0.96, 0.82), ct);

  return col * total;
}

// ── Main ──────────────────────────────────────────────────────────────────────

void main() {
  // ── Tunnel / warp distortion ──────────────────────────────────────────────
  // Pincushion warp: pushes UVs outward from centre so the screen edges are
  // stretched (rushing past) and the centre appears compressed (tunnel mouth).
  // A slow breath on the strength gives a subtle sense of acceleration.
  vec2 c = uv - 0.5;
  float r2 = dot(c, c);
  float warpStrength = 0.55 + 0.05 * sin(u_time * 0.25);
  vec2 warpedUV = c * (1.0 + warpStrength * r2) + 0.5;

  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(warpedUV.x * aspect, warpedUV.y);

  // Background UV scrolls slowly (right to left)
  float bgSpeed = 0.015;
  vec2 bgUV = vec2(p.x + u_time * bgSpeed, p.y);

  // Foreground UV scrolls ~4× faster for parallax
  float fgSpeed = 0.06;
  vec2 fgUV = vec2(p.x + u_time * fgSpeed, p.y);

  vec3 col  = vec3(0.0);
  col      += milkyWay(bgUV, u_time);
  col      += bgStars(bgUV);
  col      += fgStars(fgUV, u_time);

  // Clamp to HDR-safe output
  out_color = vec4(min(col, vec3(1.2)), 1.0);
}
`;

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

export default function StellatoShader({ className = '' }) {
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

    const resize = () => {
      canvas.width  = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const FRAME_INTERVAL = 1000 / 30;
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
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(vbo);
      gl.deleteVertexArray(vao);
    };
  }, []);

  return (
    <div className={className} style={{ background: '#000' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}
