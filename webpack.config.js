var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {path: __dirname, filename: 'bundle.js'},
  module: {
    rules: [
      {
        //test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  mode: 'development'//'production'
};
