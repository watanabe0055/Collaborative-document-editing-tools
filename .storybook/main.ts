import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/app/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/storybook/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    // "@storybook/addon-i18n",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: { experimentalRSC: true },
  docs: {
    autodocs: "tag",
  },
};
export default config;
