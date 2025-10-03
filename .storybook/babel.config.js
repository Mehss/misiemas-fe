module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    ["babel-plugin-root-import", {
      "paths": [
        {
          "rootPathSuffix": "./public",
          "rootPathPrefix": "~/public/"
        },
        {
          "rootPathSuffix": "./src",
          "rootPathPrefix": "~/"
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
};
