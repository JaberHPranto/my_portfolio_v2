module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        alkatra: ["Alkatra", "cursive"],
        mplus: ["M PLUS Rounded 1c", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        overpass: ["Overpass Mono", "monospace"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
