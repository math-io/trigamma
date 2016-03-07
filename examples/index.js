'use strict';

var trigamma = require( './../lib' );

var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
	x = Math.random()*10 - 5;
	v = trigamma( x );
	console.log( 'x: %d, f(x): %d', x, v );
}
