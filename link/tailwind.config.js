/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo : "#5B49FF",
        indigoDarker: "#4F46E5",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
}
