/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '900px',
        'mobile': '500px'
      },
      colors: {
        m_yellow: {
          100: '#FFCC02',
          200: '#FFC300',
          300: '#4B4118',
          400: '#184B2A',
          500: '#00FF5A'
        },
        m_black: {
          100: '#222326',
          200: '#171717',
          300: '#212121',
          400: '#535353',
          500: '#121212',
          600: '#2A2A2A',
          700: '#1E1E1E',
          800: '#353535',
          900: '#2E2E2E'
        },
        m_gray: {
          100: '#B3B3B3',
          200: '#A3A3A3',
          300: '#8D8D8D'
        },
        m_green: {
          100: '#92F1CE'
        },
        m_blue: {
          100: '#87D4FF',
          200: '#1E394B',
          300: '#1EA4FF'
        },
        m_red: {
          100: '#4B1818',
          200: '#FF0000'
        }
      },
      fontFamily: {
        sf_pro: ['SF Pro Display', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '95%',
        md: '1200px',
        lg: '1480px',
      },
    },
  },
  plugins: [],
}