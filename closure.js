/* 
  Closure

  A closure is a function that makes use of variables defined in outer functions that
  have previously returned

  */

  // example 1

  function outer(){
    var data = "closure are ";
    return function inner(){
        var innerData = "awesome";
        return data + innerData
    }
}

outer() 
/*

ƒ inner(){
        var innerData = "awesome";
        return data + innerData
    }

*/    

outer()() //closure are awesome

//example 2

function outer(a){
	return function inner(b){
		return a + b
	}
}

outer(5)(5) // 10

var storeouter = outer(5)
storeouter(10) //15

/* notes

we have to "return" the inner function for this to work
We can either call the inner function right away by using an
extra () or we can store the result of the funciton in a variable(similar to how bind works)
we do NOT have to give the inner function a name - we can make it annonymous (we just called it
"inner" for learning purpose)
*/

function counter(){
    var count = 0;
    return function(){
        return ++count
    }
}

counter1 = counter()
counter1 /* ƒ (){
                  return ++count
                } */
counter1() // 1
counter1() // 2

counter2 = counter()
counter2() // 1

counter1() // 3

count // count is undefined becuase it is private

//example 3

function classRoom(){
    var instructors = ["Colt", "Elie"]
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom()
course1.getInstructors(); // ["Colt", "Elie"]
course1.addInstructor("Lee"); // ["Colt", "Elie", "Lee"]
course1.getInstructors(); // ["Colt", "Elie", "Lee"]

course2 = classRoom()
course2.getInstructors() // ["Colt", "Elie"] not affected by course1

// we also have NO access to the instructors variable
// which makes it private

/*

Closure exists when an inner function makes use of variables declared in an outer function 
which has previously returned

Closure does not exist if you do not return an inner funciton and if that inner function
does not make use of variables returned by an outer function

We can use closures to create private variables and write better code that isolates our
logic and application

























