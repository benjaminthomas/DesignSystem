import React from "react";
import { buttonTheme } from "@/styles";
import { cva } from "class-variance-authority";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./buttonOrLink";
import { RequiredVariantProps } from "@/utils/types";
import { TypeSet } from "@/components/typography/typography";

const intents = [
  "primary",
  "secondary",
  "link",
  "primaryGhost",
  "secondaryGhost",
] satisfies ButtonStyleVariants["intent"][];
const sizes = ["sm", "md", "lg"] satisfies ButtonStyleVariants["size"][];
const disabled = [true, false];

export default function Buttons() {
  return (
    <React.Fragment>
      {intents.map((intent) => (
        <div key={intent} className="flex flex-col mb-4">
          <TypeSet intent="subtitle2" as="h2" className="my-4">
            Button {intent}
          </TypeSet>
          <div className="flex items-center gap-4 border-double border-4 border-neutral-400 p-4">
            {sizes.map((size) =>
              disabled.map((isDisabled) => (
                <Button
                  key={`${intent}-${size}-${isDisabled}`} // Unique key for each button
                  intent={intent}
                  size={size}
                  disabled={isDisabled}
                >
                  {`Button ${size} ${isDisabled ? "disabled" : ""}`}
                </Button>
              ))
            )}
          </div>
        </div>
      ))}
      {intents.map((intent, index) => {
        return (
          <div key={intent} className="flex flex-col mb-4">
            <TypeSet intent="subtitle2" as="h2" className="my-4">
              Button with fullWidth
            </TypeSet>
            <div
              className="flex gap-4 border-double border-4 border-neutral-400 p-4"
              key={`${intent}-${index}`}
            >
              <Button intent={intent} fullWidth={true}>
                {`Button ${intent} full width`}
              </Button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

const buttonStyles = cva(buttonTheme.base, {
  variants: {
    intent: {
      primary: buttonTheme.primary,
      secondary: buttonTheme.secondary,
      link: buttonTheme.link,
      primaryGhost: buttonTheme.primaryGhost,
      secondaryGhost: buttonTheme.secondaryGhost,
    },
    fullWidth: {
      true: "w-full",
    },
    size: {
      sm: buttonTheme.small,
      md: buttonTheme.medium,
      lg: buttonTheme.large,
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    fullWidth: false,
  },
});

type ButtonStyleVariants = RequiredVariantProps<typeof buttonStyles>;

type ButtonProps = Partial<ButtonStyleVariants> & ButtonOrLinkProps;

export function Button({
  children,
  href,
  intent = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const ariaLabel = children ? children.toString() : "Button";
  const linkProps = href ? { href: href } : {};
  return (
    <ButtonOrLink
      {...linkProps}
      disabled={disabled}
      className={buttonStyles({
        intent,
        fullWidth,
        size,
      })}
      aria-label={ariaLabel}
    >
      {children}
    </ButtonOrLink>
  );
}
