module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4845d2",
        secondaryColor: "#a5b4fc",
        accentColor: "#4845d2",
        backgroundColor: "#a5b4fc",
        textColor: "#0e0023",
      },
      fontFamily: {
        sans: ["Lato", "system-ui"],
      },
      screens: {
        sm: "640px",
        tablet: "768px",
        miniLaptop: "900px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
