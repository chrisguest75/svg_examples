/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "side-to-side": "sideToSide 3s infinite ease-in-out",
        'zoom-in-out': 'zoomInOut 2s infinite ease-in-out',        
      },
      keyframes: {
        sideToSide: {
          "0%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" }
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' }, // Normal size
          '50%': { transform: 'scale(1.5)' },  // Zoom in
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
