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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Increased from default 65ch for better reading experience on wider screens
            maxWidth: '75ch',
            color: theme('colors.gray.700'),
            lineHeight: '1.75',
            a: {
              color: theme('colors.indigo.600'),
              textDecoration: 'underline',
              textDecorationStyle: 'dotted',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.indigo.800'),
                textDecoration: 'none',
                backgroundColor: theme('colors.indigo.50'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.funnel').join(', '),
              fontWeight: '700',
              color: theme('colors.gray.900'),
              scrollMarginTop: '5rem',
            },
            h1: {
              fontSize: '2.25em',
              lineHeight: '1.2',
              marginTop: '0',
              marginBottom: '0.8em',
            },
            h2: {
              fontSize: '1.75em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            h3: {
              fontSize: '1.4em',
              marginTop: '1.5em',
              marginBottom: '0.6em',
            },
            h4: {
              fontSize: '1.2em',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            code: {
              color: theme('colors.pink.600'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '0.375rem',
              paddingRight: '0.375rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            // Remove default backticks from inline code for cleaner appearance
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              borderRadius: '0.5rem',
              padding: '1rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.indigo.400'),
              paddingLeft: '1rem',
              marginLeft: '0',
              marginRight: '0',
              color: theme('colors.gray.600'),
              backgroundColor: theme('colors.gray.50'),
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderRadius: '0.25rem',
            },
            // Remove default quotation marks for cleaner blockquote styling
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '2em',
              marginBottom: '2em',
            },
            'thead th': {
              backgroundColor: theme('colors.gray.100'),
              fontWeight: '600',
              padding: '0.75rem',
              textAlign: 'left',
              borderBottom: `2px solid ${theme('colors.gray.300')}`,
            },
            'tbody td': {
              padding: '0.75rem',
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
            },
            'tbody tr:hover': {
              backgroundColor: theme('colors.gray.50'),
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: theme('boxShadow.md'),
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            hr: {
              borderColor: theme('colors.gray.300'),
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
            },
            'ul, ol': {
              paddingLeft: '1.625rem',
            },
            'li': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'li > p': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'input[type="checkbox"]': {
              marginRight: '0.5rem',
              width: '1rem',
              height: '1rem',
            },
            '.footnotes': {
              fontSize: '0.875rem',
              marginTop: '3rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${theme('colors.gray.300')}`,
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};