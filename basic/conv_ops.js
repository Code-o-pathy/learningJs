//  let score = "33";//it will be a number after conversion
// let score = "33abc";//its a  string so type ater converting it will be NaN
let score = null;  //its converted value will be 0
// let score = undefined;//its will be NaN
console.log(typeof score);
console.log(typeof (score)) //both legit method
let valueInNumber = Number(score); //type conversion from string to number NOTE: always use first letter capital
console.log(valueInNumber); //NaN cause it tries to convert but kinda fails to do so
console.log(typeof valueInNumber); //number

//conversion conclusion for anything to Number
//"33"=> 33
//"33abbcc"=>NaN
//true=>1 false=>0

// let isLogged = 12;
// let booleanIsLogged = Boolean(isLogged);
// console.log(typeof isLogged);  //number
// console.log(typeof booleanIsLogged); //boolean
// console.log(booleanIsLogged);//true

//conversion conclusion for anything to boolean
//1,2,..n=>true
//0=>false
//""=>false
//"ajhs"=>true  

// let someNumber=33;//number
// let stringSomenumber=String(someNumber)//string
// console.log(someNumber)//33 number
// console.log( stringSomenumber)//33 string