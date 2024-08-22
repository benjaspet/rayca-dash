import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
      flowbite.content()
  ],
  theme: {
    colors: {
      sidebar: "#262425",
      sidebarActive: "#3d3d3e",
      notificationBadge: "#4e6cc8",
      storageBackground: "#2d2c2d",
      mainDash: "#1f1d1d",
      deviceDivider: "#575759",
      basicsDivider: "#282727"
    }
  },
  darkMode: "class",
  plugins: [
      flowbite.plugin()
  ],
};

export default config;