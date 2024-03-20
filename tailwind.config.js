/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        young: ["Young Serif", "serif"]
      },
            colors: {
          'rasberry': 'hsl(332, 51%, 32%)',
          'nutmeg': 'hsl(14, 45%, 36%)',
          'wedge': 'hsl(30, 10%, 34%)',
          'charcoal': 'hsl(24, 5%, 18%)',
      },
  },
  plugins: [],
}
}
