const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  ...require('./webpack.config.base'),
  entry: {
    'react-film.production.min': './lib/index.js'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ]
  }
};
