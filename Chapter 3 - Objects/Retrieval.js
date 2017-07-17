// Values can be retrieved from an Object by wrapping a string expression
// in a []. A legal Javascript name can also be retrieved with a "."

stooge[first]			// "Larry"
flight.departure.IATA	// "LAX"

// An undefined value is produced if an attempt is made to
// retrieve a non-existant member/value:

stooge[fourth]	//undefined
flight.status	//undefined
stooge[FIRST]	//undefined

// The || / "or" operator can be used to fill in default values:

var fourth = stooge[fourth] || "(none)";
var status = flight.status || "unknown";

// Attempting to retreive values from undefined will throw a TypeError
// exception. This can be guarded against with the && operator:

flight.equipment							// undefined
flight.equipment.model						// throws "TypeError"
flight.equipment && flight.equipment.model	// undefined