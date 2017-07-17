// Prototype
// Below is the books example to add a create method to the Object function.

if (typeof Object.create !== 'function'){
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);

// A prototype link does not effect updating. When changes are amde to 
// an object, the object's prototype is not touched:

another_stooge['first-name'] = "harry";
another_stooge['middle-name'] = "moses";
another_stooge.nickname = "Fart";

// The prototype chain is dynamic. If we add a new property to the 
// chain then that property will immediatly be visible to all of the
// objects of that prototype.

stooge.profession = 'actor';
another_stooge.profession;		//"actor" 


