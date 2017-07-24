/* The example of Closure below shows how we can keep methods nested in scope
from being hidden by the rest of the program.

The example below uses an immediatly invoked function to complete this by returning 
the function containing the two mthods ( increment // getValue) */

var myObject = (function(){
	var value = 0;

	return {
		increment: function (inc){
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function(){
			return value;
		}
	}
}());

/* This quo function is designed to be used without the new prefix, so the 
name is not capitalized. When we call quo, it returns a new object containing
a get_status method. A reference to that object is stored in myQuo. The status
method still has privileged access to quo's status proeprty, even though quo has 
already returned.
get_status does not have access to a copy of the perameter; it has access to the 
parameter itself.
This is possible because the function has access to the context in which it was created.
This is called Closure.
*/

var quo = function (status){
	return {
		get_status: function(){
			return status;
		}
	};
};

	//Make an instance of quo.

var myQuo = quo('bored af');

document.writeln(myQuo.get_status());

// Below is a more useful example of the above, which is a function that
// sets the DOM's color to yeallow then fased to white

var fade = function (node) {
	var level = 1;
	var step = function (){
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15){
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};

fade(document.body);



