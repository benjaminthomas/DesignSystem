import { bannerTheme } from "@/styles";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";

const bannerStyles = cva(bannerTheme.base, {
  variants: {
    intent: {
      neutral: bannerTheme.neutral,
      info: bannerTheme.info,
      warning: bannerTheme.warning,
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "info",
  },
});

export type BannerProps = {
  children?: React.ReactNode;
  intent?: "info" | "warning" | "neutral";
  fullWidth?: boolean;
};

const Banner = ({
  intent = "info",
  children = "Banner",
  fullWidth = true,
}: BannerProps) => {
  return (
    <div className={bannerStyles({ intent, fullWidth })}>
      <AiFillInfoCircle />
      {children}
      <AiFillCloseCircle />
    </div>
  );
};

export default Banner;
