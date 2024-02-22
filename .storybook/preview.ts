import type { Preview } from "@storybook/react";
import '@/sass/styles.scss';
import './storybook-fonts.css';

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    parameters: {
      layout: "fullscreen",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Components", "Modules", "Pages", "Examples"]
      }
    }
  },
};

export default preview;
