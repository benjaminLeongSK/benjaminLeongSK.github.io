/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll:{
          '10%':{
            transform:'translateY(-100%)'
          },
          '25%':{
            transform:'translateY(-100%)'
          },
          '35%':{
            transform:'translateY(-200%)'
          },
          '50%':{
            transform:'translateY(-200%)'
          },
          '60%':{
            transform:'translateY(-300%)'
          },
          '75%':{
            transform:'translateY(-300%)'
          },
          '85%':{
            transform:'translateY(-400%)'
          },
          '100%':{
            transform:'translateY(-400%)'
          }
        }
      },
      animation:{
        scroll:"scroll 8s infinite"
      }
    },
  },
  plugins: [],
}

