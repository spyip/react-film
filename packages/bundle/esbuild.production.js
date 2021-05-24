const buildConfig = require('./esbuild.base');

require('esbuild')
  .build({
    ...buildConfig,
    minify: true,
    outfile: 'lib/esbuild/react-film.production.min.js'
  })
  .catch(err => {
    console.error(err);
    process.exit(-1);
  });
