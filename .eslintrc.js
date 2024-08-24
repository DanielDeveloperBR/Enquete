module.exports = {
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: 'eslint:recommended',
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
    ignorePatterns: ['frontend/js/minified/**/*'],
  };
  