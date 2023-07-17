/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#26B195',
          light: '#F8FDFC',
        },
        text: {
          200: '#B5B5B5',
          300: '#C7C7C7',
          400: '#7E7E7E',
          500: '#676767',
          600: '#25026B',
          700: '#263238',
          800: '#1C2E5A',
          900: '#080D1B',
        },
        indigo: '#5026B1',
        blue: {
          dark: '#25026B',
        },
        reddish: { main: '#EE4D42', light: '#F7EFED' },
        yellowish: { main: '#F4C116', light: '#FDF6DE' },
        greenish: {
          light: '#D6ECDE',
          main: '#58AE65',
        },
        bluish: {
          main: '#379BC4',
          light: '#F6FCFB',
        },
        notification: '#FEF7EE',
        gray: {
          200: '#f7f7f7',
          300: '#F8F8F8',
          700: '#979797',
        },
      },
      backgroundImage: {
        hero: "url('/assets/hero.png')",
      },
      listStyleImage: {
        circular: "url('/assets/circular-list-icon.svg')",
      },
    },
  },
  plugins: [],
};
