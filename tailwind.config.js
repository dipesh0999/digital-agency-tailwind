/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: "#0F766E",
            light: "#14B8A6",
            dark: "#115E59",
          },
        },
        fontFamily: {
          sans: ["system-ui", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  