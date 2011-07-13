var browserify = require('browserify');
var src = browserify()
    .require('traverse')
    .use(require('shimify'))
    .bundle()
;
console.log(src);
