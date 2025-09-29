/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",      // app router
    "./pages/**/*.{js,ts,jsx,tsx}",    // pages router
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-compact': ['SF Compact', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(158.99% 50% at 50% 50%, #8B78FF 0%, rgba(99, 73, 255, 0.37) 100%)',
      },
    },
  },
  plugins: [],
}
