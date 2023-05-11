/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

const config = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.story.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
};
export default config;
