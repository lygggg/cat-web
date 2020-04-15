const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, '/dist' ),
    filename: 'main.js',
    publicPath: '/',
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
      context: ["/login", "/userbasket", "/sign_up", "/userpurchase", "/modify_info", "/question", "/reviewproduct", "/upload"],
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
      filename: 'index.html',
    })
  ],
};
