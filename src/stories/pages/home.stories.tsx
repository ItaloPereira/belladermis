import type { Meta } from "@storybook/react";

import GlobalLayout from "@/app/layout";
import HomePage from "@/app/page";

const meta = {
  title: "Pages/Home",
  component: HomePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomePage>;

export default meta;

export const Default = () => (
  <GlobalLayout>
    <HomePage />
  </GlobalLayout>
)