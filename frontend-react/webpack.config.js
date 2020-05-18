const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
module.exports = (env, options) => {
  dotenv.config({
    path: `env/${options.stage || 'server'}.env`
  });

  return {
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, 'dist/' ),
    filename: 'main.js?[hash]',
    publicPath: '/',
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    proxy: [{
      context: ['/login', '/userbasket', '/sign_up', '/userpurchase', '/modify_info', '/question', '/reviewproduct', '/upload'],
      target: 'http://localhost:3000',
      secure: false,
      changeOrigin: true,
      
    }],
    inline: true,   
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new CopyPlugin([
      { from: 'public/image', to: './public/image' },
    ]),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL)
    }),
    new webpack.EnvironmentPlugin(['API_URL'])
  ],
};
};
