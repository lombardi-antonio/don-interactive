'use client';

import { useEffect, useRef } from 'react';

const SVG_URLS = [
  '/bgElement00.svg',
  '/bgElement01.svg',
  '/bgElement02.svg',
  '/bgElement03.svg',
  '/bgElement04.svg',
  '/bgElement05.svg',
];

const TILE_SIZE = 1024;
const ELEMENT_COUNT = 80;
const ELEMENT_MIN_PX = 60;
const ELEMENT_MAX_PX = 160;

const VERTEX_SRC = `#version 300 es
in vec2 a_position;
out vec2 uv;
void main() {
  uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `#version 300 es
precision highp float;
precision highp sampler2D;

in vec2 uv;
out vec4 out_color;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec4 u_mouse;
uniform sampler2D u_textures[16];

void main(){
  float u_speed_x    = 1.0;
  float u_amplitude_x = 0.01;
  float u_frequency_x = 25.0;

  float u_speed_y    = 0.5;
  float u_amplitude_y = 0.05;
  float u_frequency_y = 25.0;

  float waveX  = sin(uv.y * u_frequency_x + u_time * u_speed_x);
  float offsetX = waveX * u_amplitude_x;

  float waveY  = sin(uv.x * u_frequency_y + u_time * u_speed_y);
  float offsetY = waveY * u_amplitude_y;

  vec2 scroll      = vec2(u_time * 0.02, u_time * 0.01);
  vec2 newCoords   = vec2(uv.x + offsetX, uv.y + offsetY) + scroll;
  vec2 tiledCoords = newCoords * (u_resolution / float(${TILE_SIZE}));

  out_color = texture(u_textures[0], tiledCoords);
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

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Builds a tiling canvas by scattering the SVG elements at random
 * positions, sizes and rotations. Elements near the edges are also
 * drawn wrapped to the opposite side so the tile seams are seamless.
 */
async function buildTileCanvas(darkMode) {
  const images = await Promise.all(SVG_URLS.map(loadImage));

  const offscreen = document.createElement('canvas');
  offscreen.width = TILE_SIZE;
  offscreen.height = TILE_SIZE;
  const ctx = offscreen.getContext('2d');

  ctx.fillStyle = darkMode ? '#000' : '#fff';
  ctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);

  const rng = () => Math.random();

  for (let i = 0; i < ELEMENT_COUNT; i++) {
    const img = images[Math.floor(rng() * images.length)];
    const s   = ELEMENT_MIN_PX + rng() * (ELEMENT_MAX_PX - ELEMENT_MIN_PX);
    const x   = rng() * TILE_SIZE;
    const y   = rng() * TILE_SIZE;
    const rot = rng() * Math.PI * 2;

    // Draw at primary position and at wrapped offsets so edges tile cleanly
    const offsets = [
      [0, 0],
      [-TILE_SIZE, 0], [TILE_SIZE, 0],
      [0, -TILE_SIZE], [0, TILE_SIZE],
    ];
    // Draw element onto temp canvas and mask its edges with a radial gradient
    const pad = s * 0.3;
    const tmp = document.createElement('canvas');
    tmp.width  = s + pad * 2;
    tmp.height = s + pad * 2;
    const tc  = tmp.getContext('2d');
    tc.drawImage(img, pad, pad, s, s);

    const cx   = tmp.width / 2;
    const cy   = tmp.height / 2;
    const grad = tc.createRadialGradient(cx, cy, s * 0.2, cx, cy, s * 0.65);
    grad.addColorStop(0, 'rgba(0,0,0,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    tc.globalCompositeOperation = 'destination-in';
    tc.fillStyle = grad;
    tc.fillRect(0, 0, tmp.width, tmp.height);

    for (const [dx, dy] of offsets) {
      ctx.save();
      ctx.translate(x + dx, y + dy);
      ctx.rotate(rot);
      ctx.drawImage(tmp, -tmp.width / 2, -tmp.height / 2);
      ctx.restore();
    }
  }

  return offscreen;
}

function uploadCanvasTexture(gl, canvas) {
  const tex = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  gl.generateMipmap(gl.TEXTURE_2D);
  return tex;
}

export default function TerrazzoShader() {
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

    for (let i = 0; i < 16; i++) {
      gl.uniform1i(gl.getUniformLocation(program, `u_textures[${i}]`), i);
    }

    const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');

    // Upload a 1×1 placeholder; replace once SVGs are composited
    const placeholder = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, placeholder);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));

    let tex = placeholder;

    const rebuildTexture = () => {
      buildTileCanvas(darkMQ.matches).then((tileCanvas) => {
        tex = uploadCanvasTexture(gl, tileCanvas);
      });
    };

    rebuildTexture();
    darkMQ.addEventListener('change', rebuildTexture);

    const mouse = [0, 0, 0, 0];
    const onMouseMove = (e) => { mouse[0] = e.clientX; mouse[1] = e.clientY; };
    const onMouseDown = () => { mouse[2] = 1; };
    const onMouseUp   = () => { mouse[2] = 0; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const startTime = performance.now();
    const FRAME_INTERVAL = 1000 / 20;
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
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);
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
      darkMQ.removeEventListener('change', rebuildTexture);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(vbo);
      gl.deleteVertexArray(vao);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
}
