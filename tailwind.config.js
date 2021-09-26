module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-blue": "hsl(246, 80%, 60%)",
        "primary-light-orange": "hsl(15, 100%, 70%)",
        "primary-soft-blue": "hsl(195, 74%, 62%)",
        "primary-light-red": "hsl(348, 100%, 68%)",
        "primary-lime-green": "hsl(145, 58%, 55%)",
        "primary-violet": "hsl(264, 64%, 52%)",
        "primary-yellow": "hsl(43, 84%, 65%)",

        "secondary-very-dark-blue": "hsl(226, 43%, 10%)",
        "secondary-dark-blue": "hsl(235, 46%, 20%)",
        "secondary-desaturated-blue": "hsl(235, 45%, 61%)",
        "secondary-pale-blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
