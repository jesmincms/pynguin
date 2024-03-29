/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'outline-red': '0 0 0 1px #000000',
      },
    },
  },
  plugins: [],
};
