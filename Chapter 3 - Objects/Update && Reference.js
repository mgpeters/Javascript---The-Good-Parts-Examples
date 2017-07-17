// Update
// Values in an object can be updated via assignment

stooge[first] = "Patty-Cakes";

// If the object doesn't have that property name, the object is augmented:
stooge[middle] = "Lester";
stooge.nickname = "Fanny";
flight.equipment = {
	model: "Boeing 777"
};
flight.status = 'overdue';

//Reference
//Objects are passed around by reference. They are never copied:

var x = stooge;
x.nickname = "Curly";
var nick = stooge.nickname;
//nick is "Curly" because x and stooge are references to the same
//object.

var a = {}, b = {}, c = {};
	// a, b, and c each refer to a different empty object
	a = b = c = {};
	// a, b, and c all refer to the same empty object