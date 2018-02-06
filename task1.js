
var x=6, y=15, z=4;
  
function foo1(x, y, z) {
	x += y - x++ * z ; 
	console.log('x=' + x);
}

function foo2(x, y, z) {
 	z = -- x - y * 5 ; 
 	console.log('z=' + z);
}

function foo3(x, y, z) {
  	y /= x + 5 % z ;
 	console.log('y=' + y);  
}

function foo4(x, y, z) {
 	z = x++ + y * 5 ; 
 	console.log('z=' + z);
}

function foo5(x, y, z) {
 	x = y - x++ * z ; 
 	console.log('x=' + x);
}
foo1(x, y, z);
foo2(x, y, z);
foo3(x, y, z);
foo4(x, y, z);
foo5(x, y, z);

console.log('x=' + x + ' y='+ y + ' z= ' + z);
 
var x=6, y=15, z=4;
function accountAverage(x, y, z) {
	return ((x + y + z) / 3);
}

console.log(accountAverage (x, y, z));
 

 
var h=3, r=2;
function account (r) {
 	return 2 * Math.PI * r;
}

function accountVoume(h, r) {
 	return account(r) * h;
}

function acoountSurface(h, r) {
	return account (r) * ( r + h );
}

console.log(accountVoume(h, r));
console.log(acoountSurface(h, r)); 