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