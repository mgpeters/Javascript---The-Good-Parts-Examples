// The typeof operator can be helpful in determining the type of the property

typeof flight.number 		//number
typeof flight.status		//string
typeof flight.arrival 		//object
typeof flight.manifest		//undefined

// Care must be taken, as any property can produce a value:
 
typeof flight.toString		//function
typeof flight.constructor	//function

// Two ways of dealting with the above is to have your program check
// for and reject function valued {typeof !== 'function'}, or..
// we canuse the hasOwnProperty method:

flight.hasOwnProperty('number')			//true
flight.hasOwnProperty('constructor')	//false
