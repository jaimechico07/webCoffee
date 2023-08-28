// eslint-disable-next-line no-undef
const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '4rem',
        },
      },
      fontFamily: {
        'sans-roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brown': 'linear-gradient(180deg, rgba(0,0,0,0.20772058823529416) 0%, rgba(188,108,37,1) 100%);',
        'back-menu':
          'url(/assets/images/OurMenu/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpeg)',
        'back-customer':
          'url(/assets/images/Customers/mid-section-waitress-wiping-espresso-machine-with-napkin-cafa-c.jpeg)',
        'back-contact':
          "linear-gradient(rgba(0, 0, 0, 0.45), rgb(188, 108, 37)), url('/assets/images/hero/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpeg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
