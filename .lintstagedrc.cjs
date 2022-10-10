module.exports = {
  'src/**/*{md,json}': ['prettier --write'],
  'src/**/*.{ts,tsx}': ['prettier --parser=typescript --write', 'eslint --fix'],
};
