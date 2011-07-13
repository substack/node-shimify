var assert = require('assert');
var vm = require('vm');

var browserify = require('browserify');
var shim = require('../');

exports.bundle = function () {
    var postSrc = '\n;(' + (function () {
        assert.deepEqual(
            Object.keys({ a : 5, b : 6 }),
            [ 'a', 'b' ]
        );
    }).toString() + ')()';
    
    var withoutSrc = browserify().bundle() + postSrc;
    var shimSrc = browserify().use(shim).bundle() + postSrc;
    
    var context = {
        Object : Object.getOwnPropertyNames(Object)
            .filter(function (key) {
                return [ 'keys' ].indexOf(key) < 0
            })
            .reduce(function (acc, key) {
                acc[key] = Object[key];
                return acc;
            }, {})
        ,
        assert : assert
    };
    
    assert.throws(function () {
        vm.runInNewContext(withoutSrc, context);
    });
    
    vm.runInNewContext(shimSrc, context);
};
