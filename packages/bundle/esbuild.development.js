const buildConfig = require('./esbuild.base');

require('esbuild')
  .build({
    ...buildConfig,
    outfile: 'lib/esbuild/react-film.development.js'
  })
  .catch(err => {
    console.error(err);
    process.exit(-1);
  });
