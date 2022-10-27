/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}", "./app/layouts/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      '0.5': '0.5px',
    },
    backgroundImage: {
      'default': "url('/ligne.svg')",
      'card-news' : 'linear-gradient(0deg, rgb(33, 37, 41) 0px, rgba(33, 37, 41, 0) 100%)',
      'layout' : 'url(/2e_assemblee_generale_ordinaire/IMG_2CE9185DEAF3-1.jpeg)'
    },
    extend: {
      inset: {
        '-15%': '-15%',
        '10%': '10%',
      }
    }
  },
  plugins: [],
}
