/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        content: "var(--content)",
        cta: "var(--cta)",
        "cta-text": "var(--cta-text)",
        "cta-hover": "var(--cta-hover)",
        "card": "var(--card)",
      }
    },

  },
  plugins: [],
}

