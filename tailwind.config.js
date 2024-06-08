/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        regular: ['Regular'], 
        medium: ['Medium'],
      },
      colors: {
        black: "#0E0E0E",
        blackWhite: "#323232",
        blackText: "#54595F",
        blackLight: "#222222",
        whiteLight: "#ffffff",
        white: "#fafafa",
        gray: "#CBCBCB",   
        grayColor: "#EDF2F6",
        primary: "#0B70E2",
        secondary: "#8DC936",
        redColor: "#E90C0C",
        green: "#29A71A",
        bgLight: "#62C971",
        greenLight: "#89C63C",
        greenDark:"#55A380",
        blueColor: "#0F73DC"

      }, 
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",

        },

        theme: {
          fontSize: {
            sm: ['14px', '20px'],
            base: ['16px', '24px'],
            lg: ['20px', '28px'],
            xl: ['24px', '32px'],
          }
        }

  
      }
    },
  },
  plugins: [],
}

