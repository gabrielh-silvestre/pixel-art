module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    colors: {
      'green-dark': '#036b52',
      'purple-dark': '#41197f',
      'gray-light': '#e1e5eb',
      'gray-dark': '#1a1b1c',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
