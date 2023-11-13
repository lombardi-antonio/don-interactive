/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '4xl': '1440px',
        'xs': '580px',
        '2xs': '320px',
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-in-model': 'fade-in 2.5s ease-out'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '70%': {
            opacity: '0.2',
            transform: 'translateX(-80%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    }
  },
  plugins: [],
}
