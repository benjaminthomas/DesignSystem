// Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Forms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    intent: {
      name: "Button Theme",
      description: "These are the different themes of button",
      control: { type: "select" },
      options: {
        Primary: "primary",
        Secondary: "secondary",
        Link: "link",
        "Primary Ghost": "primaryGhost",
        "Secondary Ghost": "secondaryGhost",
      },
    },
    size: {
      name: "Button Sizes",
      description: "Different sizes of button you can choose",
      control: { type: "select" },
      options: {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      },
    },
    children: {
      name: "Button text/html value",
      description:
        "This is the inside value of button it also support html elements. The will also update the Aria Lable for more accessbility",
      control: { type: "text" },
    },
    fullWidth: {
      name: "Button Stretch",
      description: "Sets button width to full/normal",
      control: { type: "boolean" },
    },
    disabled: {
      name: "Button State",
      description: "When this sets true the button will inherit disabled state",
      control: { type: "boolean" },
    },
    href: {
      name: "Link URL",
      description:
        "Enable href to transform a button into an anchor tag when rendered in the project.",
      control: { type: "text" },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    intent: "primary",
    children: "Primary Button",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
};
export const PrimaryGhost: StoryObj<typeof Button> = {
  args: {
    intent: "primaryGhost",
    children: "Primary Ghost Button",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    ...Primary.args,
    intent: "secondary",
    children: "Secondary Button",
  },
};
export const SecondaryGhost: StoryObj<typeof Button> = {
  args: {
    ...PrimaryGhost.args,
    intent: "secondaryGhost",
    children: "Secondary Ghost Button",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    ...Primary.args,
    intent: "link",
    children: "Link Button",
  },
};
