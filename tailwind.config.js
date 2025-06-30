/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // blueMainBackgroundColor: "var(--blue-mainBackgroundColor)",
        // blueTextColor: "var(--blue-textColor)",
        // blueHoverTextColor: "var(--blue-hoverTextColor)",
        // blueBackgroundColor: "var(--blue-backgroundColor)",
        // blueHoverBackgroundColor: "var(--blue-hoverBackgroundColor)",
        // blueBackgroundSecondaryColor: "var(--blue-backgroundSecondaryColor)",
        // blueHoverBackgroundSecondaryColor: "var(--blue-hoverBackgroundSecondaryColor)",
        // blueContentTextColor: "var(--blue-contentTextColor)",
        // blueBorderColor: "var(--blue-borderColor)",
        // blueButtonColor: "var(--blue-buttonColor)",
        // blueButtonTextColor: "var(--blue-buttonTextColor)",
        // blueDarkButtonTextColor: "var(--blue-darkButtonTextColor)",

        bluePrimaryBackgroundColor: "var(--blue-primary-background-color)",
        bluePrimaryBackgroundHoverColor: "var(--blue-primary-background-hover-color)",
        bluePrimaryTextColor: "var(--blue-primary-text-color)",
        bluePrimaryHoverTextColor: "var(--blue-primary-hover-text-color)",
        blueSecondaryBackgroundColor: "var(--blue-secondary-background-color)",
        blueSecondaryBackgroundHoverColor: "var(--blue-secondary-background-hover-color)",
        blueSecondaryTextColor: "var(--blue-secondary-text-color)",
        blueSecondaryHoverTextColor: "var(--blue-secondary-hover-text-color)",
        
      },
    },
  },

  plugins: [],
};
