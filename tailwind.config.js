/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#280031",
        "secondary": "#3c1f42",
        "accent": "#6242fc",
        "support": "#36213d",
        "link": "#e5ef70"
      }
    },
  },
  plugins: [],
}

