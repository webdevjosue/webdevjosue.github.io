module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
      },
      spacing: {
        hero: "2.5rem",
        "hero-lg": "4rem",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
