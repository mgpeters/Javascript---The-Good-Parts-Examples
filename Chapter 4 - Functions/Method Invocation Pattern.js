// Create myObject. It has a value and an increment method.
// The increment method takes an optional parameter.
// If the arguement is not a number, then 1 is used as a default.

var myObject = {
	value: 0,
	increment: function (inc){
		this.value += typeof inc === 'number' ? inc: 1;
	}
};

myObject.increment();
document.writeln(myObject.value);	// 1

myObject.increment(2);
document.writeln(myObject.value);	// 3
