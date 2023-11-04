import type { Config } from "tailwindcss";

let colors = {
  "primary-900": "#020A33",
  "primary-800": "#0C1A66",
  "primary-700": "#1D2F99",
  "primary-600": "#354ACB",
  "primary-500": "#556AEB",
  "primary-400": "#6E82FE",
  "primary-300": "#8FA0FF",
  "primary-200": "#B9C4FF",
  "primary-100": "#B9C4FF",
  "secondary-900": "#332200",
  "secondary-800": "#664200",
  "secondary-700": "#996000",
  "secondary-600": "#CC7C00",
  "secondary-500": "#FF9500",
  "secondary-400": "#FFB23B",
  "secondary-300": "#FFCC75",
  "secondary-200": "#FFE3B0",
  "secondary-100": "#FFF8EB",
  "tertiary-900": "#001733",
  "tertiary-800": "#002F66",
  "tertiary-700": "#004899",
  "tertiary-600": "#0061CC",
  "tertiary-500": "#007AFF",
  "tertiary-400": "#3B98FF",
  "tertiary-300": "#75B6FF",
  "tertiary-200": "#B0D5FF",
  "tertiary-100": "#EBF4FF",
  "neutral-900": "#212529",
  "neutral-800": "#343A40",
  "neutral-700": "#495057",
  "neutral-600": "#6C757D",
  "neutral-500": "#ADB5BD",
  "neutral-400": "#CED4DA",
  "neutral-300": "#DEE2E6",
  "neutral-200": "#E9ECEF",
  "neutral-100": "#F8F9FA",
  black: "#000000",
  white: "#FFFFFF",
};

let textSizes = {
  "3xl": "3.75rem",
  "2xl": "3rem",
  xl: "2.5rem",
  lg: "1.75rem",
  sm: "1.125rem",
  xs: "1rem",
};

let fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  book: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontSize: textSizes,
      fontWeights: fontWeights,
      boxShadow: {
        DEFAULT:
          "0px 0px 1px 0px rgba(33, 37, 41, 0.32), 0px 4px 6px 0px rgba(33, 37, 41, 0.20)",
        sm: "0px 0px 1px 0px rgba(33, 37, 41, 0.08), 0px 2px 2px 0px rgba(33, 37, 41, 0.06)",
      },
      borderRadius: {
        sm: "8px",
        cards: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
