const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const BASE_URL = JSON.stringify('http://aos.development.home');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new webpack.DefinePlugin({ BASE_URL })],
});
