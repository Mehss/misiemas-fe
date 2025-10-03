const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = ({ config }) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      test: /\.(js|jsx|tsx|ts)$/,
      include: [
        path.resolve('.'),
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            ["babel-plugin-root-import", {
              paths: [
                {
                  rootPathSuffix: "./public",
                  rootPathPrefix: "~/public/"
                },
                {
                  rootPathSuffix: "./src",
                  rootPathPrefix: "~/"
                }
              ]
            }],
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
            [
              "babel-plugin-import",
              {
                "libraryName": "@mui/material",
                "libraryDirectory": "",
                "camel2DashComponentName": false
              },
              "core"
            ]
          ]
        },
      },
    },
    {
      test: /\.(ts|tsx)$/,
      use: {
        loader: require.resolve('ts-loader'),
      }
    }
  ]

  config.resolve.extensions.push(".ts", ".tsx")
  webpackPlugin = new CopyWebpackPlugin([
    {
      from: 'public',
      to: 'public',
    }
  ])
  
  config.plugins.push([webpackPlugin])

  return config
}
