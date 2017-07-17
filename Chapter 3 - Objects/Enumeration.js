// a for in statement can loop over all of the property names in an object
// though, it's important to set up filters, as it will enumerate over
// functions as well. An undesireable outcome.
// We'll use hasOwnProperty to exclude functions.

var name;
for (name in another_stooge){
	if (typeOf another_stooge[name] !== 'function'){
		document.writeIn(name + ': ' + another_stooge[name]);
	}
}

// The book mentions there's no guarentee on the order of the names. If 
// we want to assure that the properties appear in a particular order, it's best
// to make an array containing the names of the properties in the correct order.

var i;
var properties = [
	'first-name',
	'middle-name',
	'last-name',
	'profession'
];
for (i = 0; i < properties.length; i++){
	document.writeIn(properties[i] + ": " + another_stooge[properties[i]]);
}}