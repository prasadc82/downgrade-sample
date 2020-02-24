/* global module, require */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const paths = require('./paths.js');

let config = {
  entry: {
    main: `${paths.source}/ng-app/main.ts`
  },
  output: {
    filename: "[name].js",
    chunkFilename: '[id].chunk.js',
    path: `${paths.dist}`
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: ['ts-loader', 'angular2-template-loader', 'webpack-import-glob-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ng-annotate-loader',
            options: {
              add: true,
              ngAnnotate: 'ng-annotate-patched'
            },
          },
          'babel-loader',
          'webpack-import-glob-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|gif)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      App: `${paths.source}/app/`
    }
  }
};

module.exports = config;
