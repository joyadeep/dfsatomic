module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        fuschia:{
          100:"#e6662c40",
          200:"#e6662c80",
          300:"#e6662cbf",
          400:"#e6662c"
          
        },
        iris:{
          100:"#4b4ded40",
          200:"#4B4DED80",
          300:"#4B4DEDBF",
          400:"#4B4DED"
        },
        peach:{
          100:"#F3D9DA40",
          200:"#F3D9DA80",
          300:"#F3D9DABF",
          400:"#F3D9DA"
        },
        onyx:{
          100:"#0E0E2C40",
          200:"#0E0E2C80",
          300:"#0E0E2CBF",
          400:"#0E0E2C"
        }
        ,
        evergreen:
        {
          100:"#ED4B9E40",
          200:"#ED4B9E80",
          300:"#ED4B9EBF",
          400:"#ED4B9E"
        },

        slate:{
          100:"#4A4A6840",
          200:"#4A4A6880",
          300:"#4A4A68BF",
          400:"#4A4A68"
      },
        lightslate:{
          100:"#8C8CA140",
          200:"#8C8CA180",
          300:"#8C8CA1BF",
          400:"#8C8CA1"
        },
        dorian:{
          100:"#ECF1F440",
          200:"#ECF1F480",
          300:"#ECF1F4BF",
          400:"#ECF1F4"
        },
        cloud:{
          100:"#FAFCFE40",
          200:"#FAFCFE80",
          300:"#FAFCFEBF",
          400:"#FAFCFE"
        },
      }
    },
  },
  plugins: [],
}
