/* global module, require */
const CopyPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const paths = require('./support/paths.js');
const common = require('./support/common.js');
// const environmentVars = require('./environment-vars/development.vars');

let config = require('./support/default.config.js');

config.mode = 'development';

config.devtool = 'source-map';

// config.module.rules.forEach((rule, index) => {
//   if ('.css'.match(rule.test)) {
//     config.module.rules[index] = common.rules.styleSourceMaps;
//   }
// });

// config.module.rules.push(common.rules.lint);

config.optimization = {
  splitChunks: common.splitChunks
};

config.plugins.push(new CopyPlugin(common.copyConfig));
// config.plugins.push(new StyleLintPlugin());
// config.plugins.push(new webpack.DefinePlugin({
//   ENVIRONMENT_VARS: JSON.stringify(environmentVars)
// }));
config.plugins.push(new HtmlWebpackPlugin({
  hash: true,
  template: `${paths.source}/index.html`,
  inject: 'body'
}));

config.devServer = {
  historyApiFallback: true,
  contentBase: `${paths.dist}`,
  port: common.port,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

module.exports = config;
