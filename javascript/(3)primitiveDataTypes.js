/**
 *@DESC Javascript datatypes (Primitive Data Types)
 - Number
 - String
 - Boolean
 - Object
 - Null
 - Undefined
 - Symbol
 - BigInt

 JavaScript has several data types that can be categorized into primitive and non-primitive types. 
 Understanding these data types is crucial for working with variables and manipulating data in JavaScript.
 */



 //Number
 let age = 25; //Interger
 let temperature = 98.6; //double point number
 let price = 19.99; //Floating point number
 let quantity = Infinity; //Special number
 let notANumber = NaN // Not a Number

 //BigInt
 let bigNumber = 1234567890123456789012345678901234567890n;
 console.log(bigNumber);

 //String
 let name = "John Doe"; // Double quotes
 let greetings = 'Hello'; // Single qoutes
 let message = `Hello, ${name}!`; //Template literals with interpolation
 let example =  greetings +  `that everything you need to know plus ${message}`

 
 //Boolean
 let isActive = true;
 let hasPermission = false;

 //undefined
 let undefinedVariable;
 console.log(undefinedVariable);

 //null
 let nullVariable = null;
 console.log(nullVariable);

  //Symbol
  let symbol1 = Symbol('symbol1');
