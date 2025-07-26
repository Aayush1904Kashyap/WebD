//string interpolation

const firstName = "Aayush";
const lastName = "Kashyap";

console.log(`Hello, my name is ${firstName} ${lastName}.`); 

const gameName=new String("Call of Duty");
console.log(gameName); // String object
console.log(typeof gameName); // object (String is a reference type in JavaScript)
console.log(gameName.length); // 14 (length of the string)
console.log(gameName.charAt(0)); // "C" (accessing the first character of the string)
console.log(gameName[0]); // "C" (accessing the first character of the string)

console.log(gameName.toUpperCase()); // "CALL OF DUTY" (converting to uppercase)

console.log(gameName.__proto__); // String.prototype (prototype of the String object)

console.log(gameName.indexOf("Duty")); // 8 (index of the substring "Duty" in the string)

const str="aayush";
const str2=str.substring(0,4); // "aayu" (substring from index 0 to 4)
console.log(str2);

const str3=str.slice(-6,3); // "aay" (slice from index -6 to 3)
console.log(str3);

const str4="     aaaaaayush    "
const str5=str4.trim(); // "aaaaaayush" (removing whitespace from both ends)
console.log(str4);
console.log(str5);

const url="https://www.google.com";
console.log(url.replace("https://", "http://")); // "http://www.google.com" (replacing "https://" with "http://")