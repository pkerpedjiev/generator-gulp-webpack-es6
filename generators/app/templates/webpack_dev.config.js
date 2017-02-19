var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {<%= name %>: ['./scripts/<%= name %>.js']},
  devtool: "cheap-source-map",
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/scripts/',       
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
