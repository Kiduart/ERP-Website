/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      columns: {
        '2': '2',
        '3': '3',
      },
      colors: {
        primary: 'rgb(0 33 71)', // Dark Blue for headers, buttons
        secondary: 'rgb(83 192 183)', // Teal for accents, hovers
        accentYellow: 'rgb(249 206 51)', // Yellow for decorative circles
        accentCyan: 'rgb(0 182 239)', // Cyan for decorative circles
        accentPurple: 'rgb(111 66 193)', // Purple for decorative circles
        white: 'rgb(255 255 255)', // White for backgrounds
        grayLight: 'rgb(247 250 252)', // Light gray for backgrounds
        gray: 'rgb(74 74 104)', // Gray for text
        grayDark: 'rgb(45 55 72)', // Dark gray for text
        // New colors for more vibrant gradients
        neonPink: 'rgb(255 105 180)', // Bright pink for gradients
        neonOrange: 'rgb(255 165 0)', // Bright orange for gradients
        deepIndigo: 'rgb(75 0 130)', // Deep indigo for gradients
        emeraldGreen: 'rgb(0 201 87)', // Bright green for gradients
        violet: 'rgb(148 0 211)', // Vibrant violet for gradients
        coral: 'rgb(255 127 127)', // Coral for gradients
        skyBlue: 'rgb(135 206 235)', // Sky blue for gradients
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '0px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        deco: '1440px',
        xxl: '1500px',
        max: '2200px',
      },
    },
  },
  plugins: [],
};