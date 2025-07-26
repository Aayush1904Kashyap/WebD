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



/*  
stack memory and heap memory
stack memory: primitive data types (stored directly)
heap memory: reference data types (stored as references to objects in memory)
when we create an object, it is stored in heap memory and a reference to that object is stored in stack memory
when we access the object, we use the reference stored in stack memory to access the object in heap memory

when we change the value of a primitive data type, it is stored in stack memory
when we change the value of a reference data type, it is stored in heap memory and the reference in stack memory remains the same
This is why when we change the value of a reference data type, it affects all references to that object
This is why when we change the value of a primitive data type, it does not affect other references to that value

*/

let myAccount = "Aayush";
let yourAccount = myAccount; // copy value of myAccount to yourAccount
yourAccount = "Kashyap"; // change value of yourAccount
console.log(myAccount); // "Aayush" (myAccount remains unchanged)
console.log(yourAccount); // "Kashyap" (yourAccount is changed)

let user1 = { 
    name: "Aayush",
    age: 21
};

let user2 = user1; // copy reference of user1 to user2
user2.name = "Kashyap"; // change name property of user2
console.log(user1.name); // "Kashyap" (user1 is affected because user2 is a reference to user1)
console.log(user2.name); // "Kashyap" (user2 is changed)