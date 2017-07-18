// JSTGP suggests there's a problem with Function Invocation and this.
// In the case below, this would be bound to the Global Object, which would
// not give us what we were looking for in terms of reusibility.

var sum = add(3,4);

// Instead, there's a workaround thats outlined below. It re-assignes this to
// a local variable within the function, so this is bound within that function
// and not ancored to the Global variable.

myObject.double = function(){
	var that = this; //this is the workaround

	var helper = function(){
		that.value = add(that.value, that.value)
	};

	helper(); //Invokes helper as a function
};

// Invokes double as a method.

myObject.double();
document.writeln(myObject.value);
