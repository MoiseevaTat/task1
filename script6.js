//Create 3 variables x = 6, y = 15, and z = 4:
// Perform and display the results of the following operations for these variables:
// · x += y - x++ * z ; 
// · z = -- x - y * 5 ; 
// · y /= x + 5 % z ;  
// · z = x++ + y * 5 ; 
// · x = y - x++ * z ; 
// Note: each operation please use default values for variables - x = 6, y = 15, and z = 4
 
var x=6, y=15, z=4;

function foo(x, y, z) {
	x += y - x++ * z ; 
	console.log('x=' + x);
	z = -- x - y * 5 ; 
	console.log('z=' + z);
	y /= x + 5 % z ;
	console.log('y=' + y);  
	z = x++ + y * 5 ; 
	console.log('z=' + z);
	x = y - x++ * z ; 
	console.log('x=' + x);
}

foo (x, y, z);

// Calculate the arithmetic average value of the three integer values and display it on the screen.

var x=6, y=15, z=4;
console.log((x+y+z)/3);

// radius-r and height-h,
//V = πr 2 h.
// S = 2π rh + 2π r 2 = 2π r (r + h). 

var h=3, r=2;

function account ( r ) {
	return 2 *  Math.PI *r;
}

function accountVoume( h, r ) {
	return account(r) * h;
}

function acoountSurface( h, r ) {
	return account (r) * ( r + h );
}

console.log(accountVoume( h, r ));
console.log(acoountSurface( h, r ));