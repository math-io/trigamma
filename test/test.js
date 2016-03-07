'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var trigamma = require( './../lib' );


// FIXTURES //

var output = JSON.parse( require( './fixtures/output.json' ).program_message );
var data = output.x;
var expected = output.expected;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof trigamma, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = trigamma( NaN );
	t.notOk( val === val, 'returns NaN' );
	t.end();
});

tape( 'the function returns `NaN` if provided `0`', function test( t ) {
	var val = trigamma( 0 );
	t.notOk( val === val, 'returns NaN' );
	t.end();
});

tape( 'the function evaluates the trigamma function', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < data.length; i++ ) {
		v = trigamma( data[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 1e-14 * Math.max( 1, abs( v ), abs( expected[ i ]) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
