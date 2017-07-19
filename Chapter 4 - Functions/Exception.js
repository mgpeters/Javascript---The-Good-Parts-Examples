// Javascript has an exception handling mechanism normally, but we
// can also create our own with throw:

var add = function(a,b){
	if (typeof a !== 'number || typeof b !== 'number'){
		throw {
			name: "TypeError",
			message: 'add needs numbers'
		};
	}
	return a + b;
}

// We can also use an exception object with a catch cause of a try statement

var try_it = function (){
	try {
		add("seven");
	} catch (e){
		document.writeln(e.name + ": " + e.message);
	}
}
try_it();