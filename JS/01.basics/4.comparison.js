console.log("2" > 1); // true (string "2" is greater than number 1)

console.log(null>0);
console.log(null>=0); 
console.log(null==0);

console.log(undefined>0); // false (undefined is not greater than 0)
console.log(undefined>=0); // false (undefined is not greater than or equal to 0)
console.log(undefined==0); // false (undefined is not equal to 0)

// ===
console.log(1 === 1); // true (strict equality, both are numbers)
console.log(1 === "1"); // false (strict equality, different types)
console.log("1" === "1"); // true (strict equality, both are strings)

