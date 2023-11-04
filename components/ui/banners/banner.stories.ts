import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./banner";

const meta: Meta<typeof Banner> = {
  title: "UI/Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: { type: "select", options: ["info", "warning", "neutral"] },
    },
    children: {
      control: { type: "text" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "info",
    children: "This is an info banner",
  },
};

export const Secondary: Story = {
  args: {
    intent: "warning",
    children: "This is a warning banner",
  },
};

export const Neutral: Story = {
  args: {
    intent: "neutral",
    children: "This is a Neutral banner",
  },
};
