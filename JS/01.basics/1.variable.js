const accountId = 123109015
let accountEmail = '9015@nitkkr.ac.in'
var accountPassword ="9015@nitkkr"
accountCity = 'Ghaziabad'

// accountId=2 //not allowed, const cannot be reassigned

accountEmail = '9016@gmail.com'
accountPassword = '9016@nitkkr'
accountCity = 'Delhi'

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/* 
prefer not to use var, use let and const instead
as var is function scoped and can lead to unexpected behavior
const is block scoped and cannot be reassigned
*/