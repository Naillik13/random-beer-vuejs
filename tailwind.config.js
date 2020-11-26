module.exports = {
  purge: [
    "./src/**/*.vue",
    "./src/**/**/*.vue",
    "./src/*.vue"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'disabled'],
    }
  },
  plugins: [],
};
