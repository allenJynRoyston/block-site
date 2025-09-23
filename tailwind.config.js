/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
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
