// A recursiive function is a function that calls itself, either directly 
// or indirectly. The solution to the Towers of Hanoi puzzle is the example given:

var hanoi = function hanoi(disc, src, aux, dst){
	if (disc > 0){
		hanoi (disc - 1, src, dst, aux);
		document.writeln("Move disc " + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc - 1, aux, src, dst);
	}
};

hanoi(3, 'Src', "Aux", "Dst");

// recursive functions can be effective in manipulating tree structures
// such as the DOM.

// The function below visits every node of the tree in the HTML source order

var walk_the_DOM = function walk(node, func){
	func(node);
	node = node.firstChild;
	while (node){
		walk (node, func);
		node = node.nextSibling;
		}
	}
};
