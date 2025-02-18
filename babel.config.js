module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-env'
  ],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};