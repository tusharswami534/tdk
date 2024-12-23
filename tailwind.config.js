/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'tory-blue': '#0046AD',
          'congress-blue': '#023DA0',
          'river-bed': '#525252',
        },
        margin: {
          'custom-8' : '30px',
          'custom-3' : '13px',
          'custom-4' : '15px',
        },
        borderRadius: {
          'custom-1': '5px',
        },
        padding: {
          'custom-3' : '13px',
          'custom-10' : '39px',
          'custom-15' : '63px',
          'custom-16' : '68px',
          '59px' : '59px',
          '57px' : '57px',
          '42px' : '42px',
          '44px' : '44px',
        },
        lineHeight: {
          '110' : '110%',
          '136' : '136%'
        },
        fontSize: {
          'custom-sm' : '13px',
          'custom-2xl' : '22px',
          'custom-3xl' : '30px',
          'custom-6xl' : '61px'
        },
      },
    },
    plugins: [],
  }