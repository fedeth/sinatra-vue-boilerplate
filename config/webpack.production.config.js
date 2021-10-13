const path = require('path');
const {merge} = require('webpack-merge');
const base = require('./webpack.base.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  devtool: false,

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'},
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
