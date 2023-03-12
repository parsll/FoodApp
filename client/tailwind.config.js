module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      'colors': {
        'primary': '#899976',
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
    fontFamily: {
      'Poppins': 'Poppins, sans-serif',
    },
  },
  plugins: [],
};
