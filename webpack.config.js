const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './site/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './site/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.png$|\.pdf$/, loader: 'file-loader' }
    ],
  },
  plugins: [HtmlWebpackPluginConfig],

};
