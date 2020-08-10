module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ' linearorange':
          'linear-gradient(270deg, #FF7521 11.7%, #FFB421 90.81%)',
      }),
      colors: {
        lightblue: '#18A0FB', // an example of extending tailwind
        darkgray: '#1D2530',
      },
      spacing: {
        '0.08': '0.08rem',
      },
    },
    screens: {
      xs: { min: '200px', max: '320px' },
      sm: { min: '320px', max: '700px' },
      md: { min: '701px', max: '970px' },
      lg: { min: '971px', max: '1300px' },
      xl: { min: '1301px' },
    },
  },
  variants: { backgroundColor: ['responsive', 'hover', 'focus', 'active'] },
  plugins: [],
};
