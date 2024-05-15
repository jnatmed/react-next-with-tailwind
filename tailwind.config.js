/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-radiance': {  
          DEFAULT: '#0099FF',
          50: '#E5F5FF',
          100: '#CCEBFF',
          200: '#99D6FF',
          300: '#66C2FF',
          400: '#33ADFF',
          500: '#0099FF',
          600: '#007ACC',
          700: '#005C99',
          800: '#003D66',
          900: '#001F33'
      }
    },
  },
  },
  plugins: [],
}