export const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Colors", href: "/colors" },
  { label: "Typography", href: "/typography" },
  { label: "Buttons", href: "/buttons" },
] as const;

export const colorTheme = [
  {
    name: "Primary",
    colors: [
      { name: "primary-900", value: "#020A33" },
      { name: "primary-800", value: "#0C1A66" },
      { name: "primary-700", value: "#1D2F99" },
      { name: "primary-600", value: "#354ACB" },
      { name: "primary-500", value: "#556AEB" },
      { name: "primary-400", value: "#6E82FE" },
      { name: "primary-300", value: "#8FA0FF" },
      { name: "primary-200", value: "#B9C4FF" },
      { name: "primary-100", value: "#B9C4FF" },
    ],
  },
  {
    name: "Secondary",
    colors: [
      { name: "secondary-900", value: "#332200" },
      { name: "secondary-800", value: "#664200" },
      { name: "secondary-700", value: "#996000" },
      { name: "secondary-600", value: "#CC7C00" },
      { name: "secondary-500", value: "#FF9500" },
      { name: "secondary-400", value: "#FFB23B" },
      { name: "secondary-300", value: "#FFCC75" },
      { name: "secondary-200", value: "#FFE3B0" },
      { name: "secondary-100", value: "#FFF8EB" },
    ],
  },
  {
    name: "Tertiary",
    colors: [
      { name: "tertiary-900", value: "#001733" },
      { name: "tertiary-800", value: "#002F66" },
      { name: "tertiary-700", value: "#004899" },
      { name: "tertiary-600", value: "#0061CC" },
      { name: "tertiary-500", value: "#007AFF" },
      { name: "tertiary-400", value: "#3B98FF" },
      { name: "tertiary-300", value: "#75B6FF" },
      { name: "tertiary-200", value: "#B0D5FF" },
      { name: "tertiary-100", value: "#B0D5FF" },
    ],
  },
  {
    name: "Neutral",
    colors: [
      { name: "neutral-900", value: "#212529" },
      { name: "neutral-800", value: "#343A40" },
      { name: "neutral-700", value: "#495057" },
      { name: "neutral-600", value: "#6C757D" },
      { name: "neutral-500", value: "#ADB5BD" },
      { name: "neutral-400", value: "#CED4DA" },
      { name: "neutral-300", value: "#DEE2E6" },
      { name: "neutral-200", value: "#E9ECEF" },
      { name: "neutral-100", value: "#F8F9FA" },
    ],
  },
  {
    name: "Black & White",
    colors: [
      { name: "black", value: "#000000" },
      { name: "white", value: "#FFFFFF" },
    ],
  },
] as const;
