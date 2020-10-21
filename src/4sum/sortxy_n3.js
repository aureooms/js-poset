
/**
 * X is sorted in increasing order
 * Y is sorted in increasing order
 * compare takes 4 arguments and returns <=> 0
 * output takes 4 arguments
 *
 */
var sortxy_n3 = function ( compare , X , Y ,  Xi1 , Xj1 , Yi1 , Yj1 , Xi2 , Xj2 , Yi2 , Yj2 , output ) {

	var a , b , c , d , s ;

	if ( Xi1 > Xj1 || Yi1 > Yj1 || Xi2 > Xj2 || Yi2 > Yj2 ) {
		return ;
	}

	//  -----------------------------
	// |              X              |
	//  -----------------------------
	// Xi                           Xj

	//  -----------------------------
	// |              Y              |
	//  -----------------------------
	// Yi                           Yj

	a = X[Xi1] ;
	b = Y[Yj1] ;
	c = X[Xj2] ;
	d = Y[Yi2] ;

	s = compare( a , b , c , d ) ;

	if ( s === 0 ) {

		output( Xi1 , Yj1 , Xj2 , Yi2 ) ;

		sortxy_n3( compare , X , Y , Xi1 + 1 , Xj1 , Yi1 , Yj1 , Xi2 , Xj2 , Yi2 , Yj2 , output ) ;
		sortxy_n3( compare , X , Y , Xi1 , Xi1 , Yi1 , Yj1 - 1 , Xi2 , Xj2 , Yi2 , Yj2 , output ) ;
		sortxy_n3( compare , X , Y , Xi1 , Xi1 , Yj1 , Yj1 , Xi2 , Xj2 - 1 , Yi2 , Yj2 , output ) ;

	}

	else if ( s < 0 ) {

		sortxy_n3( compare , X , Y , Xi1 + 1 , Xj1 , Yi1 , Yj1 , Xi2 , Xj2 , Yi2 , Yj2 , output ) ;
		sortxy_n3( compare , X , Y , Xi1 , Xi1 , Yi1 , Yj1 , Xi2 , Xj2 - 1 , Yi2 , Yj2 , output ) ;

	}

	else {

		sortxy_n3( compare , X , Y , Xi1 , Xj1 , Yi1 , Yj1 - 1 , Xi2 , Xj2 , Yi2 , Yj2 , output ) ;
		sortxy_n3( compare , X , Y , Xi1 , Xj1 , Yj1 , Yj1 , Xi2 , Xj2 , Yi2 + 1 , Yj2 , output ) ;

	}


} ;

exports.sortxy_n3 = sortxy_n3 ;
