const webpack = require('webpack');
const path = require('path');

/* Webpack config
  entry : src/index.js
  output : public file /public/bundle.js

  modules :
    babel-loader : React library & ES6 transpiler
    css-loader, style-loader : CSS loading
*/
module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    index: [
      path.resolve(__dirname, 'src/index.js'),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, {
          loader: 'css-loader?modules=true&camelCase=true'
        }],
      },
    ],
  },
};