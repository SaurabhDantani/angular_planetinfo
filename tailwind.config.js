/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class', // Enable dark mode using class

  theme: {
    extend: {
      colors: {
        dark: '#333333',
        // Add other dark mode colors as needed
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
  ],  
}
