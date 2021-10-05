module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lockplus: {
          blue: '#0596FF',
          hoverblue: '#0586FF',
          opacGray: '#C4C4C4',
          placeholderGray: '#CFCFCF',
        },
      },
      fontFamily: {
        lockplus: ['Oxygen'],
      },
      scale: {
        102: '1.02',
        103: '1.03',
      },
      width: {
        35: '35/100',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
