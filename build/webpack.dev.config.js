const base = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const config = require('./config');
const p = config.path;
const devServer = config.devServer;

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: devServer.port,
    host: devServer.host,
    overlay: {
      errors: true
    },
    hot: true
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: 'common/[name].[hash].js',
    path: p.output,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});