const { resolve } = require('path');

module.exports = {
  devtool: 'source-map',
  output: {
    devtoolNamespace: 'react-film',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/iu,
        use: ['source-map-loader']
      }
    ]
  },
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/isomorphic-react/dist/react.js'),
      'react-dom': resolve(__dirname, 'node_modules/isomorphic-react/dist/react-dom.js')
    }
  },
  target: ['web', 'es5']
};
