module.exports = {
  stories: [
    // "../stories/**/*.stories.mdx",
    "../components/**/_stories/*.stories.@(js|jsx|ts|tsx)",
    "../components/*.stories.js"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
};
