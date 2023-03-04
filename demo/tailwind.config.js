/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
       },
    },
  },
  plugins: [],
}
// module.exports = {
//   theme: {
//     spacing: {
//       '1': '8px',
//       '2': '12px',
//       '3': '16px',
//       '4': '24px',
//       '5': '32px',
//       '6': '48px',
//     }
//   }
// }

// module.exports = {
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       'white': '#ffffff',
//       'purple': '#3f3cbb',
//       'midnight': '#121063',
//       'metal': '#565584',
//       'tahiti': '#3ab7bf',
//       'silver': '#ecebff',
//       'bubble-gum': '#ff77e9',
//       'bermuda': '#78dcca',
//     },
//   },
// }