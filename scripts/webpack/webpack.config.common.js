const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const dotenv = require('dotenv')
const DotenvWebpack = require('dotenv-webpack')
// const GitRevisionPlugin = require('git-revision-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const webpack = require('webpack')

const smp = new SpeedMeasurePlugin()
// const gitRevisionPlugin = new GitRevisionPlugin()

dotenv.config()

const webpackConfigPluginWrap = smp.wrap({
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  plugins: [
    // gitRevisionPlugin,
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
      // VERSION: gitRevisionPlugin.version()
    }),
    new DotenvWebpack(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'public',
        to: 'public'
      }
    ])
  ],
  entry: [
    require.resolve('@babel/polyfill'),
    path.join(process.cwd(), 'src/index.tsx')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        include: [
          path.resolve('src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        include: [
          path.resolve('src'),
        ],
        use: ['style-loader', 'css-loader']
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    modules: ['node_modules', path.resolve(process.cwd(), 'src')]
  }
})

/* eslint-disable-next-line no-console */
console.log(`Running on ${process.env.NODE_ENV} environment`)

module.exports = webpackConfigPluginWrap
