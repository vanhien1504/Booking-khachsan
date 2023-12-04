/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        30: '30px',
    },
    fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
    },
    spacing: {
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
    },
    borderRadius: {
        6: '6px',
        10: '10px',
        16: '16px',
    },
    screens: {
      
      'xsM': {'max': '453px'},
      'sM': {'max': '574px'},
      'smM': {'max': '641px'},
      'mdM': {'max': '769px'},
      'lgM': {'max': '1025px'},
      '1xlM': {'max': '1140px'},
      '2xlM': {'max': '1281px'},
      '3xlM': {'max': '1537px'},
      

    }
    
    },
  },
  plugins: [],
}