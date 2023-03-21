/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'myblue':'#3715B3',
        'mydarkblue':'#332f5a',
        'mylightblue-900':'#8e8baf',
        'mylightblue-600':'#aeabf5'
      },
      keyframes: {
        'left-to-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'left-to-right': 'left-to-right 1s ease-out',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underline': {
                'textDecoration': 'underline',
                'text-decoration-color': 'mydarkblue',
            },
        }
        addUtilities(extendUnderline)
    }
  ]
}