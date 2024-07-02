/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include your React components
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      ocean: {
        lightest: '#80ECFF',
        light: '#52BACC',
        DEFAULT: '#2E8999',
        dark: '#145A66',
        darkest: '#062C33'
      },
      amythest: {
        lightest: '#BF80FF',
        light: '#8F52CC',
        DEFAULT: '#632E99',
        dark: '#3D1466',
        darkest: '#1C0533'
      }
    },
    extend: {},
  },
  plugins: [],
}

