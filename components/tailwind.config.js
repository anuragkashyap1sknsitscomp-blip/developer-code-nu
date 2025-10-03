// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'slide-loop': {
          '0%': { transform: 'translateX(0%)' },
          '20%': { transform: 'translateX(-100%)' },
          '40%': { transform: 'translateX(-200%)' },
          '60%': { transform: 'translateX(-300%)' },
          '80%': { transform: 'translateX(-400%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'slide-loop': 'slide-loop 6s linear infinite',
      },
    },
  },
  plugins: [],
}
