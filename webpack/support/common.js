/* eslint-disable no-undef */
const paths = require('./paths.js');
const path = require('path');

let common = {
  copyConfig: [
    {
      from: `${paths.source}/index.html`
    },
    {
      from: `${paths.source}/img/**/*`,
      to: 'img/',
      flatten: true
    },
    {
      from: `${paths.root}/node_modules/angular-i18n/*`,
      to: 'i18n/',
      flatten: true
    }
  ],
  port: 4040,
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all'
      }
    }
  }
};

module.exports = common;
