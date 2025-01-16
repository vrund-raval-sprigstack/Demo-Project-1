/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  // this code is added so that tailwind and bootstrap don't conflict with eachother
  prefix: "tw-",
  important: true,
  corePlugins: {
    preflight: false,
  }
}

