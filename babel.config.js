module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@svg': './src/assets/svg',
          '@utils': './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
      },
    ],
    'react-native-reanimated/plugin',
  ],
  exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};
