module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    // Add any additional rules here
  },
};
