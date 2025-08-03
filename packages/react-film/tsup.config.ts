import { defineConfig, type Options } from 'tsup';

const COMMON_CONFIG: Options = {
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || ''),
    'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version || '0.0.0-0')
  },
  dts: true,
  sourcemap: true,
  target: 'esnext',

  // TODO: Remove below when fully migrated.
  // dts: false,
  platform: 'browser'
};

const COMMON_IIFE_CONFIG: Options = {
  ...COMMON_CONFIG,
  bundle: true,
  esbuildPlugins: [
    {
      name: 'isomorphic-react',
      setup(build) {
        build.onResolve({ filter: /^react$/ }, () => ({
          path: 'react',
          namespace: 'isomorphic-react'
        }));

        build.onResolve({ filter: /^react\-dom(\/client)?$/ }, () => ({
          path: 'react-dom',
          namespace: 'isomorphic-react-dom'
        }));

        // TODO: Should we add an error here?
        build.onLoad({ filter: /^react$/, namespace: 'isomorphic-react' }, () => ({
          contents: 'module.exports = window.React;',
          loader: 'js'
        }));

        build.onLoad({ filter: /^react\-dom(\/client)?$/, namespace: 'isomorphic-react-dom' }, () => ({
          contents: 'module.exports = window.ReactDOM;',
          loader: 'js'
        }));
      }
    }
  ],
  format: ['iife'],
  globalName: 'ReactFilm',
  outDir: './umd',
  outExtension: () => ({ dts: '.d.ts', js: '.js' })
};

export default defineConfig([
  {
    ...COMMON_CONFIG,
    entry: { 'react-film': './src/index.js' },
    format: ['cjs', 'esm']
  },
  {
    ...COMMON_IIFE_CONFIG,
    entry: { 'react-film.production.min': './src/bundle.ts' },
    minify: true
  },
  {
    ...COMMON_IIFE_CONFIG,
    entry: { 'react-film.development': './src/bundle.ts' },
    minify: false
  }
]);
