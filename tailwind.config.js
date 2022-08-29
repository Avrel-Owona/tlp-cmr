/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}", "./app/layouts/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'ligne': "url('/ligne.svg')",
    }
  },
  plugins: [],
}
