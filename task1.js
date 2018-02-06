
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
 
 
var x=6, y=15, z=4;
console.log((x+y+z)/3);
 

 
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