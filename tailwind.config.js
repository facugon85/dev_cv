/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neobrutal': {
          'violet': {
            DEFAULT: '#8A2BE2',
            dark: '#9B4DFF'
          },
          'green': {
            DEFAULT: '#00FF7F',
            dark: '#33FF99'
          },
          'orange': {
            DEFAULT: '#FF6B35',
            dark: '#FF8B5F'
          },
          'black': '#1A1A1A',
          'white': '#FFFFFF',
          'gray': {
            '100': '#F5F5F5',
            '200': '#E5E5E5',
            '300': '#D4D4D4',
            '400': '#A3A3A3',
            '500': '#737373',
            '600': '#525252',
            '700': '#404040',
            '800': '#262626',
            '900': '#171717',
          }
        }
      },
      boxShadow: {
        'neobrutal': '4px 4px 0px 0px rgba(26,26,26,1)',
        'neobrutal-hover': '6px 6px 0px 0px rgba(26,26,26,1)',
        'neobrutal-dark': '4px 4px 0px 0px rgba(255,255,255,0.2)',
        'neobrutal-dark-hover': '6px 6px 0px 0px rgba(255,255,255,0.3)',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

