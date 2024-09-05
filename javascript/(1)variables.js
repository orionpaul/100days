/** 
 * @Desc Variables : to create a new variable we use these decorators{ let , const }
 * @Desc let: we use let keyword to create a temporary variable
*/
let name  = "Fadzai" // variable name can be changed later
let age = 23 // variable name cannot be changed later

console.log(name) // print method to print the value of a variable | Output: Fadzai
console.log(age) // print method to print the value of a variable || Output: 23

name = "Tinashe" // changing the value of a variable
age = 30 // changing the value of a variable

/**
 *  Declaring Variables with let
let was introduced in ES6 (ES2015).
It is block-scoped, meaning it is only accessible within the block (denoted by {}) where it's declared.
Unlike var, let is not hoisted in the same way, so you can't access a let variable before its declaration.
 */

/**
 * @Desc const: we use const keyword to create a permanent variable
 *  Declaring Variables with const
const is also block-scoped and was introduced in ES6.
Variables declared with const must be assigned a value at the time of declaration and cannot be reassigned later.
const is used for values that are meant to remain constant (immutable).
The value of a const object or array can be mutated (changed), but the variable itself cannot be reassigned.
 */
const accessPassword = "1234" // variable name cannot be changed later
console.log(accessPassword) // print method to print the value of a variable | Output: 1234

const person = { name: "Orion", age: 30}
person.age = 31
console.log(person.age) // print method to print the value of a variable | Output: 31

// Reassigning the entire object will throw an error
// person = { name: "David", age: 25 };  // Error: Assignment to constant variable

// Reassigning the object's properties is allowed
person.name = "David";

/**
 * @Desc Variable Naming
 * Variable names must begin with a letter, underscore (_), or dollar sign ($).
   Variable names cannot start with a number.
   JavaScript is case-sensitive, so myVariable and myvariable are different.
 */

//Valid variable names
let myVariable = 10;
let _myVariable = 20;
let $myVariable = 30;
let my_variable = 40;
let myVariable123 = 50;