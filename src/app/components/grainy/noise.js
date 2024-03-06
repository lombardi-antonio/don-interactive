function Noise() {
  return (
    <svg>
      <filter id="grainy">
        <feTurbulence type="turbulace" baseFrequency="0.65" />
      </filter>
    </svg>
  );
}

module.exports = Noise;
