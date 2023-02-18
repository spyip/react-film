import { build, context } from 'esbuild';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { writeFile } from 'fs/promises';

import buildConfig from './esbuild.base.mjs';

const BUILD_OPTIONS = {
  ...buildConfig,
  metafile: true,
  minify: true,
  outfile: 'dist.esbuild/react-film.production.min.js'
};

const watch = process.argv.slice(2).includes('--watch');

if (watch) {
  context(BUILD_OPTIONS).then(context => context.watch());
} else {
  build(BUILD_OPTIONS).then(
    ({ metafile }) =>
      writeFile(resolve(fileURLToPath(import.meta.url), '../dist.esbuild/meta.json'), JSON.stringify(metafile)),
    err => {
      console.error(err);
      process.exit(-1);
    }
  );
}
