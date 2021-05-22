module.exports = {
  'packages/bundle/src/**/*.js': ['npm run precommit:bundle'],
  'packages/component/src/**/*.js': ['npm run precommit:component'],
  'packages/isomorphic-react/src/**/*.js': ['npm run precommit:isomorphic-react'],
  'packages/isomorphic-react-dom/src/**/*.js': ['npm run precommit:isomorphic-react-dom']
};
