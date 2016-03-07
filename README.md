trigamma
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Trigamma][trigamma-function] function.

The [trigamma function][trigamma-function] is defined as the derivative of the [digamma function][digamma-function]:


## Installation

``` bash
$ npm install math-trigamma
```


## Usage

``` javascript
var trigamma = require( 'math-trigamma' );
```


#### trigamma( x )

Evaluates the [trigamma function][trigamma-function].

``` javascript
var v = trigamma( -2.5 );
// returns ~9.539

v = trigamma( 1 );
// returns ~1.645

v = trigamma( 10 );
// returns ~0.105
```

If `x` is `0` or a negative `integer`, the `function` returns `NaN`.

``` javascript
var v = trigamma( 0 );
// returns NaN

v = trigamma( -1 );
// returns NaN

v = trigamma( -2 );
// returns NaN
```

If provided `NaN`, the `function` returns `NaN`.

``` javascript
var v = trigamma( NaN );
// returns NaN
```


## Examples

``` javascript
var trigamma = require( 'math-trigamma' );

var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
	x = Math.random()*10 - 5;
	v = trigamma( x );
	console.log( 'x: %d, f(x): %d', x, v );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-trigamma.svg
[npm-url]: https://npmjs.org/package/math-trigamma

[build-image]: http://img.shields.io/travis/math-io/trigamma/master.svg
[build-url]: https://travis-ci.org/math-io/trigamma

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/trigamma/master.svg
[coverage-url]: https://codecov.io/github/math-io/trigamma?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/trigamma.svg
[dependencies-url]: https://david-dm.org/math-io/trigamma

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/trigamma.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/trigamma

[github-issues-image]: http://img.shields.io/github/issues/math-io/trigamma.svg
[github-issues-url]: https://github.com/math-io/trigamma/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[boost-trigamma]: http://www.boost.org/doc/libs/1_60_0/libs/math/doc/html/math_toolkit/sf_gamma/trigamma.html#math_toolkit.sf_gamma.trigamma.implementation
[compute-io]: https://github.com/compute-io/
[trigamma-function]: https://en.wikipedia.org/wiki/Trigamma_function
[digamma-function]: https://en.wikipedia.org/wiki/Digamma_function
