/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        1024: "1024px",
        500: "500px",
      },
      height: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
