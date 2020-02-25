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
      // https://github.com/angular/angular/issues/23426#issuecomment-449725566
      {
        test: /[\/\\]@angular[\/\\].+\.js$/,
        parser: {
          system: true
        }
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
    }),
    // https://github.com/angular/angular/issues/20357#issuecomment-392266272
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      `${paths.root}/ng-app/`,
      {}
    )
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      App: `${paths.source}/app/`
    },
    symlinks: true
  }
};

module.exports = config;
