/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoThin: "Roboto_100Thin",
        robotoLight: "Roboto_300Light",
        robotoRegular: "Roboto_400Regular",
        robotoMedium: "Roboto_500Medium",
        robotoBold: "Roboto_700Bold",
        robotoBlack: "Roboto_900Black",
      },
    },
  },
  plugins: [],
};
