
require('babel-core/register');
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});
require('./server');
