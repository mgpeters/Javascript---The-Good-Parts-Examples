var empty_object = {};

var stooge = {
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
		city: "New Yaark" //final prop needs no comma,,,
	} //the final curly needs no semi;;;
};