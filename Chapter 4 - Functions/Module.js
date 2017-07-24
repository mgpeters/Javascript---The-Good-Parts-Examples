/* A module is a function or object that presents an interface but that hides
its state and implementation */

String.method('deentityify', function(){

		// The entity table. It maps entity names to the characters

		var entity = {
			quot: '"',
			lt: '<',
			gt: '>'
		};
	//return the deentityify method

	return function(){
		// This deentityify method called the string replace
		// method, looking for substrings that start with '&' and end
		// with ';'. If the characters in between are in the entity table,
		// then it replaces the entity with the charactrs from the table using
		// regular expressions

			return this.replace(/&([^&;]+);/g,
				function (a,b){
					var r = entity[b];
					return typeof r === 'string' ? r : a;
				}
			);
	};
}());

document.writeln('&lt;&quot;&gt;'.deentityify()); // <">

// The immediatly invocation creates and returns the function that becomes
// the deentityify method.