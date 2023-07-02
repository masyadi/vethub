/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: '1200px',
        },
      },
      colors: {
        "primary": "#0D5ADA",
        "navy": "#0D1C30",
        "yellow": "#FFC700",
        "gray": "#6F6969",
        "border": "#434040",
      },
    },
  },
  plugins: [],
};
