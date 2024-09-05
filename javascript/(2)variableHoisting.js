import * as x from 'casper'
/**
 * @Desc Variable hosting 
 * 5 differences between var,let and const
 * - var is function scoped
 * - let is block scoped
 * - const is block scoped and cannot be reassigned
 * - var is hoisted
 * - let is not hoisted
 * - const is not hoisted
 * -const must be initialized
 * -let can be initialized later
 * -var can be initialized later
 */

//Example (var)
var x = 10;
if (x === 10) {
  var x = 20;  // Re-declaring with var (allowed)
  console.log(x);  // Output: 20
}
console.log(x);  // Output: 20 (since var is function-scoped)

//Example (let)
let y = 10;
if (y === 10) {
  let y = 20;  // Block-scoped, so this y is different
  console.log(y);  // Output: 20
}
console.log(y);  // Output: 10 (outer y remains unchanged)

//Example (const)
const z = 10;
console.log(z);  // Output: 10
// z = 20;  // Error: Assignment to constant variable

/**
 * @NOTE !!!: Understanding when to use var, let, 
 * and const is important for writing clean and maintainable JavaScript code. 
 * Generally, use let for variables that will change, 
 * const for variables that won’t change, and avoid var in modern JavaScript.
 */