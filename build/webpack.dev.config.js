const base = require('./webpack.base.config');
const webpack = require('webpack');
const merge = require('webpack-merge');


module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: '8080',
    host: '127.0.0.1',
    overlay: {
      errors: true
    },
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});