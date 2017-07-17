// The Delete operator can be used to remove a property from an object.
// Removing a property may allow a property from the prototype linkage to shine through

another_stooge.nickname		// 'Moe'

//Remove nickname from another_stooge reveals the nickname of the prototype

delete another_stooge.nickname;

another_stooge.nickname	//'Curly'