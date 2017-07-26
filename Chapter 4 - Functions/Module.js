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

/*	The general pattern of a module is a function that defines private variables
 and functions; creates privileged functions which, through closure, will have 
 access to the private variable  and functions; and that returns the privileged functions
 or stores them in an accessable place */

// It's also used to make objects that are secure, like an object that
// produces a serial number.

var serial_maker = function (){

	// Produces an object of unique strings. A unique string
	// is made up of two parts: a prefix and a sequence number
	// The object comes with methods for setting the prefix and sequence
	// number, and the gensym method that produces unique strings

	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function (p){
			prefix = String(p);
		},
		set_seq: function (s){
			seq = s;
		},
		gensym: function (){
			var result = prefix + seq;
			seq++;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym(); 	// Unique is "Q1000"


