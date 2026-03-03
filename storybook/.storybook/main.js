import { mergeConfig } from "vite";

export default {
  stories: ["../components/**/*.stories.@(js|jsx)"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "react-native$": "react-native-web",
        },
      },
      optimizeDeps: {
        include: ["react-native-web"],
      },
    });
  },
};