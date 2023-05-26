/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      'primary-color': '#5546FB',
      'primary-accent': '#BEFF34',
      'secondary-pink': '#FF7BCA',
      'secondary-purple': '# 1A154C',
      'black': '#000',
      'white': '#fff'
    },
      fontFamily:{
        sans: ['Power Grotesk','san-serif' ],
        'sans-black': ['Power Grotesk Black','san-serif' ],
        serif: ['Editorial old', 'serif'],
        'serif-italic': ['Editorial old italic', 'serif'],
      },
    
   
    extend: {},
  },
  plugins: [],
}

