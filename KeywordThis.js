/* So what is "this"?

1. A reserved keyword in Javascript
2. Usually determined by how a function is called (what we call "execution context")
3. Can be determined using four rules (global, object/implicit, explicit, new)

*/

// 1. Global Context
// When "this" is not inside of a declared object

console.log(this); // window

function whatIsThis(){
	return this;
}

function variablesInThis(){
	// since the value of this is the window
	// all we are doing here is creating a global variable
	this.person = "Elie"
}

console.log(person); // Elie

whatIsThis(); // window

// Strict Mode
// When we enable strict mode and we are not inside a declared object

"use strict"

console.log(this); // window

function whatIsThis(){
	return this;
}

function variablesInThis(){
	this.person = "Elie"
}

variablesInThis() //TypeError, can't set person on undefined

whatIsThis() // undefined 

// 2. Implicit/Object
// When the keyword "this" is inside of a declared object

// strict mode does not make a difference here

var person = {
	firstName: "Elie",
	sayHi: function(){
		return "Hi " + this.firstName;
	},
	determineContext: function(){
		return this === person;
	}
};

person.sayHi() // "Hi Elie"
person.determineContext() // true

// Nested Objects
// What happens when we have a nested object?

var person = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstName;
	},
	determineContext: function(){
		return this === person;
	},
	dog: {
		sayHello: function(){
			return "Hello " + this.firstName;
		},
		determineContext: function(){
			return this === person;
		}
	}
}

person.sayHi() // "Hi Colt"
person.determineContext() // true

person.dog.sayHello() // "Hello undefined"
person.dog.determineContext() // false