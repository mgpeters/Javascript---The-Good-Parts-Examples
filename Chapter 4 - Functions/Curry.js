// Currying allows us to produce a new function by combining a function 
// and an arguement:

var add1 = add.curry(1);
document.writeln(add1(6));	// 7

// The add1 function adds 1 to its arguement. Javascript doesnot have a curry 
// method, but we can fix that by augmenting the Function.prototype:

Function.method('curry', function(){
	var args = arguements, that = this;
	return function (){
		return that.apply(null, args.concat(arguements));
	};
});	// Not quite right..

// The .concat method only works with Arrays. So we need a workaround.

Function.method('curry', function(){
	var slice = Array.prototype.slice,
		args = slice.apply(arguements),
		that = this;
	return function(){
		return that.apply(null, args.concat(slice.apply(arguements)));
	}
