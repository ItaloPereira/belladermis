import type { Meta, StoryObj } from "@storybook/react";
import { FaWhatsapp } from "react-icons/fa";

import IconButton from "@/ui/components/icon-button";


const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["contained"],
      control: { type: "select" },
    },
    color: {
      options: ["whatsapp"],
      control: { type: "select" },
    },
    size: {
      options: ["extra-large"],
      control: { type: "select" },
    },
    children: {
      options: ["whatsapp"],
      control: { type: "select" },
      mapping: {
        whatsapp: <FaWhatsapp />,
      },
    }
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraLargeWhatsapp: Story = {
  args: {
    ariaLabel: "Open Whatsapp",
    children: <FaWhatsapp />,
    color: "whatsapp",
    size: "extra-large",
    variant: "contained",
  },
};