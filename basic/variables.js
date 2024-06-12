const accountId = 12677;
let email = "ankit@gmail.com";
var accPass = "12345"; //dont use var cause it has scope issues so always use let(single line comment)
/*prefer not to use var because of issues in block scope and functional scope (multi line comment)
 */
accCity = "Jaipur"; //can be declared but not recommended;
// accountId=2
// console.log(accountId); changing constant variables not allowed
email = "hc@email.com";
accPass = "3278";
accCity = "mumbai";
let accState; //will be undefined
console.table([accountId, accPass, accCity, email, accState]);
