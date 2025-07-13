"use strict"; // treat all JS code as new version

/* alert("Welcome to Data Types in JavaScript");
  as we are using node.js, we will not use alert and not browser specific code
*/

let n = "Aayush";
let age = 21;
let isLoggedIn = true;

//primitive data types
//number=> 2 to power 53
//bigInt
// string
// boolean => true/false
// null => empty value
// undefined => variable is declared but not assigned
// symbol => unique and immutable value

console.log(typeof n); // string
console.log(typeof age); // number

console.log(typeof null); // object (this is a known bug in JS)

// object => collection of key-value pairs