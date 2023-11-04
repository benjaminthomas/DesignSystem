export const typographyStyles = {
  base: "text-neutral-900",
  h1: "text-3xl font-bold tracking-[0.02813rem] leading-[4.5rem]",
  h2: "text-2xl font-bold leading-[4rem]",
  h3: "text-xl font-semibold leading-[3rem]",
  h4: "text-lg font-normal leading-[2.5rem]",
  subtitle1: "text-lg font-normal leading-[2.5rem]",
  subtitle2:
    "text-sm font-bold tracking-[0.025rem] leading-[1.75rem] uppercase",
  body1_semibold: "text-sm font-bold leading-[1.75rem]",
  body1_normal: "text-sm font-normal leading-[1.75rem]",
  body2_semibold: "text-xs font-semibold leading-[1.5rem]",
  body2_normal: "text-xs font-medium leading-[1.75rem]",
} as const;

export const buttonTheme = {
  base: "flex items-center justify-center rounded-full font-medium text-xs focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all",
  primary:
    "bg-primary-500 text-white border hover:bg-primary-700 focus:bg-primary-600 visited:bg-primary-800 disabled:hover:bg-primary-500",

  secondary:
    "bg-neutral-200 text-neutral-900 hover:bg-neutral-400 focus:bg-neutral-400 visited:bg-neutral-400 disabled:hover:bg-neutral-200",

  primaryGhost:
    "border border-primary-500 text-primary-500 hover:bg-primary-700 hover:text-white focus:border-primary-600 visite:border-primary-800 disabled:hover:bg-transparent disabled:hover:text-primary-500",
  secondaryGhost:
    "border border-neutral-400 text-neutral-900 hover:bg-neutral-200 focus:border-neutral-600 visite:border-neutral-200 disabled:hover:bg-transparent disabled:hover:text-neutral-900",
  link: "px-0 py-0 text-neutral-700 hover:text-primary-500 hover:underline disabled:hover:no-underline disabled:hover:text-neutral-700",
  ghost: "bg-transparent",

  small: "px-4 py-2",
  medium: "px-6 py-3",
  large: "px-8 py-4",

  disabled: "opacity-40 cursor-not-allowed",
} as const;

export const bannerTheme = {
  base: "px-[20px] py-[12px] bg-neutral-100 flex justify-between text-white items-center rounded-md",
  neutral: "bg-neutral-600",
  info: "bg-primary-400",
  warning: "bg-secondary-500",
} as const;

export const cardStyles = {
  base: "flex items-start gap-4 bg-white border border-neutral-500 rounded-lg shadow-sm",
  body: "flex flex-col gap-2",
} as const;
