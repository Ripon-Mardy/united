/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor : {
        "textNavColor" : "#999",
        "headingColor": "#eee",
      },
      backgroundColor: {
        "facebookBg": "#4B69A8",
        "youtubeBg": "#EE403F",
        "linkedinBg": "#1D98D3",
        "instagramBg": "#D70867",
        "whatsappBg": "#00A834",
      }
    },
  },
  plugins: [],
};
