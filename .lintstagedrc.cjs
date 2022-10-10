module.exports = {
  'src/**/*{md,json}': ['prettier --write'],
  'src/**/*.ts?(x)': [
    'prettier --parser=typescript --write',
    'eslint --quiet --fix',
  ],
};
