module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lockplus: {
          blue: '#0596FF',
          hoverblue: '#42B0FF',
        },
      },
      fontFamily: {
        lockplus: ['Oxygen'],
      },
      scale: {
        102: '1.02',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
