let myDate = new Date(); // current date and time
console.log(myDate); // prints the current date and time
console.log(typeof myDate); // object (Date is a built-in object in JavaScript)
console.log(myDate.toString()); // converts date to string format

console.log(myDate.toJSON()); // converts date to JSON format
console.log(myDate.toISOString()); // converts date to ISO string format
console.log(myDate.toDateString()); // converts date to a readable date string
console.log(myDate.toLocaleString()); // converts date to a locale-specific string format
console.log(myDate.getFullYear()); // gets the full year (e.g., 2025)

let myCreatedDate =new Date(2004, 3, 19);
console.log(myCreatedDate.toDateString()); // prints the date for April 19, 2004

let mybirthDate = new Date("2025-07-26");
console.log(mybirthDate.toLocaleString()); // prints the date for July 26, 2025

let myTimeStamp=Date.now(); // gets the current timestamp in milliseconds since January 1, 1970
console.log(myTimeStamp); // prints the current timestamp

myDate.toLocaleString('default',{
    weekday: 'long', // full name of the day
    year: 'numeric', // full year
    month: 'long', // full name of the month
    day: 'numeric', // numeric day of the month
    hour: '2-digit', // 2-digit hour
    minute: '2-digit', // 2-digit minute
    second: '2-digit' // 2-digit second
})