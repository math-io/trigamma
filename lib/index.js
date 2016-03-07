'use strict';

/*
* NOTE: the original C++ code and copyright notice is from the [Boost library]{http://www.boost.org/doc/libs/1_55_0/boost/math/special_functions/trigamma.hpp}.
*
* The implementation has been modified for JavaScript.
*/

/**
* (C) Copyright John Maddock 2006.
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/

// MODULES //

var abs = require( 'math-abs' );
var evalrational = require( 'math-evalrational' ).factory;
var floor = require( 'math-floor' );
var pow = require( 'math-power' );
var sinpi = require( 'math-sinpi' );


// CONSTANTS //

var OFFSET_1_2 =  2.109325408935546875;
var PI = require( 'const-pi' );

// Polynomial coefficients...
var P_1_2 = [
	-1.10932535608960258341,
	-4.18793841543017129052,
	-4.63865531898487734531,
	-0.919832884430500908047,
	1.68074038333180423012,
	1.21172611429185622377,
	0.259635673503366427284
];
var Q_1_2 = [
	1.0,
	3.77521119359546982995,
	5.664338024578956321,
	4.25995134879278028361,
	1.62956638448940402182,
	0.259635512844691089868,
	0.629642219810618032207e-8
];
var P_2_8 = [
	-0.387540035162952880976e-11,
	0.500000000276430504,
	3.21926880986360957306,
	10.2550347708483445775,
	18.9002075150709144043,
	21.0357215832399705625,
	13.4346512182925923978,
	3.98656291026448279118
];
var Q_2_8 = [
	1.0,
	6.10520430478613667724,
	18.475001060603645512,
	31.7087534567758405638,
	31.908814523890465398,
	17.4175479039227084798,
	3.98749106958394941276,
	-0.000115917322224411128566
];
var P_8_INF = [
	-0.263527875092466899848e-19,
	0.500000000000000058145,
	0.0730121433777364138677,
	1.94505878379957149534,
	0.0517092358874932620529,
	1.07995383547483921121
];
var Q_8_INF = [
	-0.263527875092466899848e-19,
	0.500000000000000058145,
	0.0730121433777364138677,
	1.94505878379957149534,
	0.0517092358874932620529,
	1.07995383547483921121
];

// Compile functions to evaluate rational functions based on the above coefficients...

var rateval_1_2 = evalrational( P_1_2, Q_1_2 );
var rateval_2_8 = evalrational( P_2_8, Q_2_8 );
var rateval_8_INF = evalrational( P_8_INF, Q_8_INF );


// TRIGAMMA //

/**
* FUNCTION: trigamma( x )
*	Evaluates the trigamma function.
*
* @param {Number} x - input value
* @returns {Number} function value
*/
function trigamma( x ) {
	var result = 0;
	var s;
	var y;
	var z;
	// Check for negative arguments and use reflection:
	if ( x <= 0 ) {
		z = 1 - x;
		if ( floor( x ) === x ) {
			return NaN;
		}
		s = abs( x ) < abs( z ) ? sinpi( x ) : sinpi( z );
		return -trigamma( z ) + pow( PI, 2 ) / ( s * s );
	}
	if ( x < 1 ) {
		result = 1 / (x * x);
		x += 1;
	}

	if ( x <= 2 ) {
		result += OFFSET_1_2 + rateval_1_2( x ) / (x * x);
	}
	else if ( x <= 8 ) {
		y = 1 / x;
		result += ( 1 + rateval_2_8( x ) ) / x;
	}
	else {
		y = 1 / x;
		result += ( 1 + rateval_8_INF( x ) ) / x;
	}
	return result;
} // end FUNCTION trigamma()


// EXPORTS //

module.exports = trigamma;
