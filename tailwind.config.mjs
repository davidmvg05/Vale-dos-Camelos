/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': { 'max': '480px' },
      'sm': { 'max': '576px' },
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        alentejo: {
          beige: '#FAF9F6',
          beigeDark: '#F0EFEA',
          bordeaux: '#69130D',
          bordeauxHover: '#520E0A',
          bordeauxLight: '#8C1B13',
          black: '#000000',
          dark: '#1A1A1A',
          muted: '#7D7D6A',
          mutedLight: '#A3A392',
          border: 'rgba(105, 19, 13, 0.15)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px rgba(105, 19, 13, 0.08)',
        'dropdown': '0 20px 45px rgba(0, 0, 0, 0.14)',
        'pill': '0 4px 20px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
