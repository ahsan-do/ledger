/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
         primary: '#2563EB',
        secondary: '#64748B',
        success: '#16A34A',
        danger: '#DC2626',
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',
        },
        text: {
          light: '#0F172A',
          dark: '#F1F5F9',
        },
      },
       spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      fontSize: {
        body: '14px',
        title: '20px',
        heading: '28px',
      },
    },
  },
  plugins: [],
};