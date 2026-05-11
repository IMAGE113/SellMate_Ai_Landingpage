/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0052cc",   // Professional Tech Blue
        brandDark: "#091E42",   // Enterprise Slate
      },
    },
  },
  plugins: [],
}
