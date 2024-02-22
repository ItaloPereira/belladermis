import type { Meta, StoryObj } from "@storybook/react";

import ContactWhatsapp from "@/ui/modules/contact-whatsapp";


const meta = {
  title: "Components/ContactWhatsapp",
  component: ContactWhatsapp,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof ContactWhatsapp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
