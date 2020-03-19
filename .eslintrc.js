module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    "react-native/react-native": true,
  },
  plugins: [
    'flowtype',
    'react',
    'react-native'
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
  }
};
