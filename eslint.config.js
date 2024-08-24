module.exports = [
    {
      ignores: ['dist/**/*'],
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
      },
    },
  ];
  
