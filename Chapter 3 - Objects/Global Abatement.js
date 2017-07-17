// The book suggests creating a single global variable to contain your application,
// as to strengthen the resiliency of the program

var MYAPP = {};

// That variable then becomes the containerfor your application:

MYAPP.stooge = {
	"first": "Larry",
	"second": "Curly",
	"third": "Moe"
	};

//Objects can nest

var flight = {
	airline: "Virgin Air",
	number: 4288,
	departure: {
		IATA: "LAX",
		time: "2004-09-15 14:44",
		city: "LA"
	},
	arrival: {
		IATA: "LAG",
		time: "2004-10-15 blah blah blah",
		city: "New Yaark"
	}
};