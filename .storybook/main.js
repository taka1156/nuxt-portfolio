module.exports = {
  stories: [
    // "../stories/**/*.stories.mdx",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/*.stories.js"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
};
