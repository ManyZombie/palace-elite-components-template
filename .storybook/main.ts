// import type { StorybookViteConfig } from 'storybook-builder-vite-vue2';
const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/vue",
  core: {
    builder: "storybook-builder-vite-vue2"
  },
  async viteFinal(previousConfig) {
    const { config } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );
    return mergeConfig(previousConfig, {
      ...config,
      plugins: [],
      css: {}
    });
  },
}