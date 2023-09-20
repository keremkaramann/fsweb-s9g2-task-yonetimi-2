/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        customShadow: "0 4px 5px 0 rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
