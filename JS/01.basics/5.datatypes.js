// primitive data types
// 7 types: STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT

//REFERENCE DATA TYPES
// array,object,function


// dynamically typed language
// variable can hold any type of data
const score = "100"; // string
const scoreNumber = 100.3; // number
const isLoggedIn = true; // boolean
const user = null; // null
let userName; // undefined (not assigned any value yet)

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id === anotherId); // false (symbols are unique) 


// data type checking
console.log(typeof score); // string
console.log(typeof scoreNumber); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof user); // object (null is considered an object in JavaScript)
console.log(typeof userName); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof BigInt(123456789012345678901234567890)); // bigint

//data type checking on non-primitive types
const arr = [1, 2, 3]; // array
const obj = { 
    name: "Aayush", 
    age: 21 }; // object
const func = function() { 
    console.log("Hello"); }; // function

console.log(typeof arr); // object (arrays are a type of object)
console.log(typeof obj); // object
console.log(typeof func); // function (functions are a special type of object)