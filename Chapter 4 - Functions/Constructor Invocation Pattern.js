// Create a constructor function called Quo.
// It makes and Object with a status property.

var Quo = function(input){
	this.status = input;
};

// Next gives all instances of Quo a public method called get_status.

Quo.prototype.get_status = function (){
	return this.status;
};

// Make an instance of Quo.

var newQuo = new Quo('daaaaamn');

document.writeln(myQuo.get_status());	// daaaamn