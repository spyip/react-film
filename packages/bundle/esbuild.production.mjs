import { build, context } from 'esbuild';

import buildConfig from './esbuild.base.mjs';

const BUILD_OPTIONS = {
  ...buildConfig,
  minify: true,
  outfile: 'dist.esbuild/react-film.production.min.js'
};

const watch = process.argv.slice(2).includes('--watch');

if (watch) {
  context(BUILD_OPTIONS).then(context => context.watch());
} else {
  build(BUILD_OPTIONS).catch(err => {
    console.error(err);
    process.exit(-1);
  });
}
