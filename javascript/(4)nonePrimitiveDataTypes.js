/**
 * @Desc Non-Primitive (Reference) Data Types.
 * Non-primitive data types are objects and are mutable (i.e., their values can change). 
 * Unlike primitive data types, they are stored and accessed by reference.
 */


/**
 * @Objects :
 * A collection of key-value pairs. Keys are strings (or symbols), 
 * and values can be any data type.
 */
let person = {
    name: "John",
    age: 30,
    isStudent: false
  };

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false

// Modifying object properties
person.age = 31;
console.log(person.age);
// Adding new properties
person.city = "New York";
console.log(person.city);
// Deleting properties
delete person.isStudent;
console.log(person.isStudent);
// Checking if a property exists
console.log("name" in person);
console.log("isStudent" in person);
// Iterating over object properties
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Object methods
let person2 = {
    name: "Alice",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  person2.greet();

/**
 * @Arrays :
 * A collection of elements. Elements can be of any data type.
 * A special type of object used to store ordered lists of values.
 *  Arrays can contain elements of different types.
 */
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", true, null, undefined];
console.log(numbers[0]); //output: 1
console.log(numbers[2]); //output: 3
console.log(mixedArray[2]); //output: true
console.log(mixedArray); // output: [1, "two", true, null, undefined]

// Modifying array elements
numbers[0] = 10; // Change the first element to 10
console.log(numbers);

// Adding elements to the end of the array
numbers.push(6);

//Array methods
let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.length); // Output: 5
console.log(numbers2.join(", ")); // Output: "1, 2, 3, 4, 5"
console.log(numbers2.pop()); // Output: 5
console.log(numbers2.indexOf(3));
console.log(numbers2.includes(3));

// Iterating over array elements
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
}


/**
 * @Functions :
 * A block of reusable code that performs a specific task.
 * Functions can take parameters and return values.
 */
function greet(name) {
    return "Hello, " + name + "!";
  }
console.log(greet("Alice")); // Output: Hello, Alice!

// Arrow functions
let add = (a, b) => a + b;

// Function expressions
let multiply = function(a, b) {
    return a * b;
  };
console.log(multiply(2, 3));

//Factory functions
function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        console.log("Hello, my name is " + this.name);
      }
    };
  }
 //a function that calls its self
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }