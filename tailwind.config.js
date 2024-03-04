/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'real-green':'#2dbe6c',
        'footer-black':"#1b1d21",
        'light-gray':"#93959e",
        'vlight-blue':"#e5f8ed"
      },
      boxShadow: {
        '3xl': '-5px 10px 10px  rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

