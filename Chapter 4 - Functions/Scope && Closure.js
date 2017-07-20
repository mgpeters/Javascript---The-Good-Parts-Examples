// Scope:
// Though most C syntax languages have block scope, Javascript has FUNCTION
// scope. That means the parameters and variables defined in a function are not visible outside of the function
// and that a variable defined anywhere within the function is visible everywhere
// within the function.

var foo = function (){
	var a = 3, b = 5;

	var bar = function(){
		var b = 7,  c = 11;
			// At this point, a is 3, b is 7, c is 11.
			a += b + c;
			// at this point, a is 21, b is 7, c is 11.
	};
	//at this point, a is 3, b is 5, c is undefined.
	bar();
	// at this point, a is 21 and b is 5.
};

// Closure:
// 