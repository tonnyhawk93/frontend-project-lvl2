module.exports = {
  env: {
    node: true,
    es2021: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ["jest"],
  rules: {
    "no-underscore-dangle": [2, { "allow": ["__filename", "__dirname"] }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
};
