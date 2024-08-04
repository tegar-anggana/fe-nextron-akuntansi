const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "nunito-sans": ["Nunito Sans", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      // 'light',
      {
        mytheme: {
          // colors
          primary: "#50B498", // Primary color
          "primary-content": "#ffffff", // Foreground content color to use on primary color
          secondary: "#747474", // Secondary color
          "secondary-content": "#ffffff", // Foreground content color to use on secondary color
          accent: "#DCF0EA", // Accent color
          "accent-content": "#43967F", // Foreground content color to use on accent color
          neutral: "#DCF0EA", // Neutral color
          "neutral-content": "#43967F", // Foreground content color to use on neutral color
          "base-100": "#ffffff", // Base color of page, used for blank backgrounds
          "base-200": "#eaeaea", // Base color, a little darker
          "base-300": "#747474", // Base color, even more darker
          "base-content": "#161616", // Foreground content color to use on base color
          info: "#0000ff", // Info color
          "info-content": "#c6dbff", // Foreground content color to use on info color
          success: "#00ff00", // Success color
          "success-content": "#001600", // Foreground content color to use on success color
          warning: "#00ff00", // Warning color
          "warning-content": "#001600", // Foreground content color to use on warning color
          error: "#ff0000", // Error color
          "error-content": "#160000", // Foreground content color to use on error color

          // css variables
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "2px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
