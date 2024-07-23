module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'vibrant-pink': '#FF1493',
        'vibrant-purple': '#8A2BE2',
        'vibrant-blue': '#00BFFF',
        'vibrant-green': '#00FF7F',
        'vibrant-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
