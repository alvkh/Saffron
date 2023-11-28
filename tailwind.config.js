/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        "gray-p-100":'#F5F5F5'
      },
      fontFamily:{
        "peyda-noraml":"peyda-noraml",
        "peyda-bold":"peyda-bold"
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/img/blog/login.png')",
        'contactus': "url('../assets/img/contactus/contactus.png')",
      }
    },
  },
  plugins: [],
}

