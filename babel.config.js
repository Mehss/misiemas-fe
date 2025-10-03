module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'babel-plugin-root-import', {
        paths: [
          {
            rootPathSuffix: './public',
            rootPathPrefix: '~/public/',
          }, {
            rootPathSuffix: './src',
            rootPathPrefix: '~/',
          },
        ],
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'core',
    ],
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel'],
    },
    production: {
      only: [
        './src',
      ],
      plugins: ['transform-react-remove-prop-types', '@babel/plugin-transform-react-inline-elements', '@babel/plugin-transform-react-constant-elements'],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
}
