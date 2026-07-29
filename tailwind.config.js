export default {
  content: ['./index.html', './**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#0B1026',
        royal: '#1B2448',
        gold: '#FFD700',
        'gold-dim': '#C5A059',
        sky: '#38BDF8',
        pink: '#F472B6',
        'pink-deep': '#BE185D',
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['"Times New Roman"', 'Times', 'serif'],
        arabic: ['"Amiri"', 'serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      backgroundImage: {
        'islamic-pattern': "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      },
      animation: {
        sway: 'sway 3s ease-in-out infinite alternate',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        sway: {
          '0%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
};
