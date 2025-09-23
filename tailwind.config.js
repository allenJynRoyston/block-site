/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
        'marquee-fast': 'marquee 5s linear infinite',
        'marquee-vertical-seamless': 'marquee-vertical-seamless 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-vertical-seamless': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-25%)' },
        },
      },
    },
  },
  plugins: [],
}
