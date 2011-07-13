var fs = require('fs');
var shimPath = require.resolve('es5-shim');
var shimCode = fs.readFileSync(shimPath, 'utf8');

module.exports = function (bundle) {
    bundle.prepend(shimCode);
};
