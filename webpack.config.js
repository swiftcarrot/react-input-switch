var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    'bundle': './example/index.js',
    'styles': './example/styles.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/builds',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('bundle', ['/'])
  ]
};
