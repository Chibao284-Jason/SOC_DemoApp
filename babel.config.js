module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),

      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],

        alias: {
          '@app': './app',
          '@components': './app/components/',
          '@screens': './app/screens/',
          '@store': './app/store/',
          '@navigation': './app/navigation/',
          '@models': './app/models/',
        },
      },
    ],
    'react-native-reanimated/plugin',
    'jest-hoist',
  ],
};
