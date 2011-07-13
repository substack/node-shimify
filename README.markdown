shimify
=======

[Browserify](https://github.com/substack/node-browserify)
middleware to prepend
[es5-shim](https://github.com/kriskowal/es5-shim)
so your browserified bundles work in old browsers.

examples
========

````javascript
var browserify = require('browserify');
var src = browserify()
    .require('traverse')
    .use(require('shimify'))
    .bundle()
;
console.log(src);
````

installation
============

With [http://npmjs.org](npm), do:

    npm install shimify
