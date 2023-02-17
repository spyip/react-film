import { resolve } from 'path';

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

export default {
  bundle: true,
  entryPoints: ['lib/index.js'],
  logLevel: 'info',
  plugins: [onResolveReact],
  sourcemap: true,
  target: ['ie11'],
};
