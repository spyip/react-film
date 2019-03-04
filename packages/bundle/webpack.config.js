const { resolve } = require('path');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: {
    'react-film.production.min': './lib/index.js'
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    library: 'ReactFilm',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist')
  },
  plugins: [new Visualizer()]
};
