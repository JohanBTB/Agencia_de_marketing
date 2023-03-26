/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        mynavbar:"0px 10px 8px 0px rgba(3, 3, 4, 0.1), 0 1px 2px -1px rgba(3, 3, 4, 0.5)",
      },   
      colors:{
        'myblue-100': '#C5C1FF',
        'myblue-300': '#827FFF',
        'myblue-500': '#3715B3',
        'myblue-700': '#2B0D8C',
        'myblue-900': '#1D075F',
        'mydarkblue-900':'#1f1c3d',
        'mydarkblue-500':'#332f5a',
        'mydarkblue-100': '#635f9c',
        'mylightblue-100':'#b6b5ea',
        'mylightblue-500':'#9c9bf2',
        'mylightblue-700':'#827fda',
        'mylightblue-900':'#6966c2',
        
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
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
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