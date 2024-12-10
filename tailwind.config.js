/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", 
    "layouts/*.html",
    "layouts/**/*.html",
    "layouts/partials/**/*.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        "funnel": ['"Funnel Display"', 'Helvetica', 'sans-serif'],
        "cabin": ['"Cabin"', 'Helvetica', 'sans-serif'],
      },
        animation: {
          blob: "blob 8s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1) skew(0deg, 0deg)",
            },
            "16%": {
              transform: "translate(15px, -25px) scale(1.1) skew(2deg, 8deg)",
            },
            "33%": {
              transform: "translate(30px, -60px) scale(1.3) skew(10deg, 2deg)",
            },
            "66%": {
              transform: "translate(-5px, -5px) scale(0.9) skew(2deg, 0deg)",
            },
            "100%": {
              transform: "translate(0px, 0px) scale(1) skew(0deg, 0deg)",
            },
          },
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};