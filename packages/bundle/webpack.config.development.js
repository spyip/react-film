module.exports = {
  ...require('./webpack.config.base'),
  entry: {
    'react-film.development': './lib/index.js'
  },
  mode: 'development'
};
