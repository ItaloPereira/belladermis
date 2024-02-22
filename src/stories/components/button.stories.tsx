import type { Meta, StoryObj } from "@storybook/react";
import { FaWhatsapp } from "react-icons/fa";

import Button from "@/react/components/button";


const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["contained", "outlined"],
      control: { type: "select" },
    },
    color: {
      options: ["success", "inherit", "whatsapp"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    startIcon: {
      options: ["empty", "whatsapp"],
      control: { type: "select" },
      mapping: {
        empty: undefined,
        whatsapp: <FaWhatsapp />,
      },
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeSuccess: Story = {
  args: {
    children: "Button Text",
    href: "#",
    color: "success",
    size: "large",
    variant: "contained",
    animated: false
  },
};

export const LargeWhatsappStartIcon: Story = {
  args: {
    children: "Button Text",
    href: "#",
    color: "whatsapp",
    size: "large",
    variant: "contained",
    animated: false,
    startIcon: <FaWhatsapp />
  },
};

export const LargeSuccessAnimated: Story = {
  args: {
    children: "Button Text",
    href: "#",
    color: "success",
    size: "large",
    variant: "contained",
    animated: true
  },
};

export const SmallInheritOutlined: Story = {
  args: {
    children: "Button Text",
    href: "#",
    color: "inherit",
    size: "small",
    variant: "outlined",
  },
};
