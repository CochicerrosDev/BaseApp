const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const S3Plugin = require('webpack-s3-plugin')

const environment = process.env.DJANGO_ENVIRONMENT || 'local'

let plugins = [
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
  }),
  new webpack.EnvironmentPlugin({ SENTRY_DSN_FRONTEND: '' })
]

module.exports = {
  output: {
    filename: 'main_'.concat(environment, '.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    proxy: {
      '/': 'http://localhost:8080'
    },
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000
    }
  },
  plugins: plugins
}
