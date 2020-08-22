const { resolve } = require('path');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

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
  plugins: [
    new StatsWriterPlugin({
      filename: 'stats.json',
      transform: (_, opts) => JSON.stringify(opts.compiler.getStats().toJson({ chunkModules: true }), null, 2)
    })
  ],
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/isomorphic-react/dist/react.js'),
      'react-dom': resolve(__dirname, 'node_modules/isomorphic-react-dom/dist/react-dom.js')
    }
  }
};
