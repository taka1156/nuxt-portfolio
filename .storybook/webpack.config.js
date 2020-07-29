const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post',
  });

  config.module.rules.push({
    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
    loader: 'url-loader',
  });

  config.resolve.extensions = ['.js', '.vue', '.json']
  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  return config;
};
