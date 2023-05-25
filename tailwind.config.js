/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'image': 'url("https://res.cloudinary.com/lrmn/image/upload/v1685004360/Vector_sk88_omrocy.png")'
      }
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),],
}