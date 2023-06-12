const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/lib/index.tsx', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the compiled files
    filename: 'index.js', // Output filename
    libraryTarget: 'umd', // Specify the library target
    umdNamedDefine: true, // Specify the AMD module name for UMD builds
    globalObject: 'typeof self !== \'undefined\' ? self : this', // Specify the global object
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
  },
  externals: {
    react: 'react', // Exclude React from the bundled output
    'react-dom': 'react-dom', // Exclude ReactDOM from the bundled output
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};