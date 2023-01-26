/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#2f3137",
        sidebar: "#202225",
        main: "#35393f",
        white: "#fafafa",
        sidebarIcon: "#575b62",
        headerBtn: "#202225",
      },
    },
  },
  plugins: [],
};
