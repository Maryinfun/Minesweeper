const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    filename: 'main.js'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'src/sass/abstracts/_variables.scss'
              ]
            }
          }
        ]
      }, {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|mp3)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: './index.html',
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({ filename: 'main.css' })],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 3000
  }
};
