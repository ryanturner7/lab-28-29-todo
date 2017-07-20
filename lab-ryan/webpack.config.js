'use strict';

const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/src/main.js`,
  output: {
    publicPath: '/',
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new ExtractPlugin('bundle-[hash].css'),
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
