// OOP Object Oriented Programming 
// use constructor functions to reduce duplication in our code
// use call and apply to refactor constructor function 
// These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"
// We strive to make our classes abstract and modular


// Example 1 of constructor funcitons

function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}


var firstHouse = House(2,2,1000);

firstHouse; // undefined , because we are the returning anything from the function so our House funciton returns undefined

// now add "new" keyword 

var firstHouse = new House(2,2,1000);

firstHouse // {bedrooms:2, bathroom:2, numSqft:1000}
					 // __proto__: Object

// so what does the new keyword do?
/* 
	it first creates an empty object
	it then sets the keyword "this" to be that empty object
	it adds the line "return this" to the end of the funciton, which follows it
	it adds a property onto the empty object called "__proto__", which link the 
	empty object
*/

// example 2 add methods to our objects inside of the constructor function

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked!");
    }
}

var rusty = new Dog("Rusty", 2);
var kiki = new Dog("Kiki", 1);
rusty.bark(); //Rusty just barked!
kiki.bark();	//Kiki just barked!


// OOP 3 multiple constructors

// example 1 failed example
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    Car(make, model, year);
    this.numWheels = 2;
}

var firstMotorCycle = new Motorcycle("fuck", "best", 2002);

firstMotorCycle.make //undefined
firstMotorCycle.model //undefined
firstMotorCycle.year //undefined
firstMotorCycle.numWheels // 2
// The problem with example 1 is that the keyword this inside the car function is not 
// the keyword this we want to use

// Solutions for this problem is to use call/apply

function Motorcycle(make, model, year){
    Car.call(this,make, model, year);
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    Car.apply(this, arguments);
    this.numWheels = 2;
}

// ********* end of solutions ***********


// OOP 5 Prototype

function Person(name){
    this.name = name
}

var elie = new Person("Elie")
elie.__proto__ === Person.prototype // true
elie.__proto__.constructor === Person // true

// OOP 6 Prototype Chain

// this is a constructor function
function Person(name){
    this.name = name
}

// this is an object created from the Person constructor
var elie = new Person("Elie")

Person.prototype.isInstructor = true;

elie.isInstructor // true

// OOP 7

function Person(name){
	this.name = name;
	this.sayHi = function(){
		return "Hi " + this.name;
	}
}

elie = new Person("Elie");
elie.sayHi();  // Hi Elie
elie // {name: "Elie", sayHi: ƒ}
// now this code works, but it is inefficient
// every time we make an object using the new keyword we ahve to redefine this funciton
// but its the same for everyone! Let's put it on the prototype instead!
function Person(name){
	this.name = name;
}

Person.prototype.sayHi = function(){
	return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi(); // Hi Ellie

// OOP 7 challenge 
/* 

create a constructor function for a Vehicle: every object created from this constructor 
should have a make, model, and year property. Each object should also have a property called isRunning
, which should be set to false

Every object created from the Vehicle constructor should have a function called turnOn, which changes 
the isRunning property to true

Every object created from the Vehicle constructor should have a function called turnOff, which changes 
the isRunning property to false

Every object created from the Vehicle constructor should have a method called honk, which returns the 
string "beep" ONLY if the isRunning property is true

*/

// my solution: inefficient of the turnOn and turnOff function

function Vechicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
    this.turnOn = function(){
        return this.isRunning = true;
    }
    this.turnOff = function(){
        return this.isRunning = false;
    }
}

Vechicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep";
    }
}

honda = new Vechicle("honda", "civic", "2012");

console.log(honda.isRunning); // false
console.log(honda.turnOn()); // true
console.log(honda.honk()); // beep
console.log(honda.model); // civic

// Colt solution 

function Vechicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vechicle.prototype.turnOn = function(){
        return this.isRunning = true;
    }

Vechicle.prototype.turnOff = function(){
        return this.isRunning = false;
    }    

Vechicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep";
    }
}

honda = new Vechicle("honda", "civic", "2012");


// Recap
/*
Every time the new keyword is used, a link between the object created and the prototype 
of the constructor is established = this link can be accessed using __proto__

The prototype bejct contains a property called constructor, which points back to the 
constructor function

To share properties and methods for objects created by a constructor funciton, place 
them in the prototype as it is the most efficient

*/


































