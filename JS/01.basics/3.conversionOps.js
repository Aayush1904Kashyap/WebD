let score="33abc"

console.log(typeof score); 

console.log(typeof (score)); 

let valueInNumber = Number(score); // convert to number
console.log(typeof valueInNumber); // number 
console.log(valueInNumber); // NaN (Not a Number)

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0

// to boolean
 let isloggedIn = "aayush"
 let isLoggedInBoolean = Boolean(isloggedIn);
 console.log(isLoggedInBoolean); 

 // 1=> true
 // 0=> false  
 //"" => false
 //aayush=> true