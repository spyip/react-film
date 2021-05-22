const { resolve } = require('path');

const onResolveReact = {
  name: 'isomorphic-react',
  setup(build) {
    build.onResolve({ filter: /^react$/ }, () => {
      return {
        path: resolve('node_modules/isomorphic-react/dist/react.js')
      };
    });

    build.onResolve({ filter: /^react-dom$/ }, () => {
      return {
        path: resolve('node_modules/isomorphic-react/dist/react-dom.js')
      };
    });
  }
};

module.exports = {
  bundle: true,
  entryPoints: ['src/index.js'],
  logLevel: 'info',
  plugins: [onResolveReact],
  sourcemap: true,
  watch: process.argv.slice(2).includes('--watch')
};
