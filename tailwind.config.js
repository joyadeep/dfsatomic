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
        fuschia:"#ED4B9E",
        iris:"#4B4DED",
        peach:"#F3D9DA",
        onyx:"#0E0E2C",
        evergreen:"#ED4B9E",
        slate:"#4A4A68",
        lightslate:"#8C8CA1",
        dorian:"#ECF1F4",
        cloud:"#FAFCFE"
      }
    },
  },
  plugins: [],
}
