//if
// const isUserLoggedIn=false
// if(!isUserLoggedIn){
//     console.log("true")
// }

// comparing operators 
//>,<,==,<=,>=,!=   
//===,!== (this are strict equality checker, they check value as well as datatypes..)

//implicit if (not readable hence aint recommended)
// const power=100
// if(power<300)console.log("insufficient power"), //can use multiple lines only by using comma in between and semicolon at end;
// console.log("Sufficient power");


// const balance=1200
// if(balance<1000){
//     console.log("insufficient balance")
// }
// else if(balance==1000){
//     console.log("boundary balance")
// }
// else{
//     console.log("sufficient balance")
// }

// const isUserLoggedIn=true
// const debitCard=true
// if(isUserLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }

// || && 

//switch case

// let marks = 25
// switch (marks) {
//     case 25: console.log("insatisfactory")
//         break;
//     case marks > 40 && marks < 80: console.log("just pass")
//         break;
//     case marks > 80 && marks < 90: console.log("good")
//         break;
//     case marks > 90: console.log("exccellent")
//         break;
//     default: console.log("enter marks in range 1 to 100")
//         break;

// }




//no expressions in switch cae in js



// let  amount = 12000;
// switch (amount) {
//     case (amount >= 7500 && amount < 10000):
//          console.log("Play Station 3");
//         break;
//     case (amount >= 10000 && amount < 15000):
//          console.log("XBOX 360");
//         break;
//     case (amount >= 15000):
//          console.log("iMac");
//         break;
//     default:
//          console.log("No reward");
//         break;
// }


//truthy and falsy

// falsy values- false,0,-0,BigInt 0n,"",null,undefined,NaN
//else truthy-"0","false"," ",[],{},function(){}

//how to check whether an array and object is empty or not 
// const useremails=[]
// if(useremails.length===0){
//     console.log("is array")
// }
// const emptyObject={}
// if(Object.keys(emptyObject).length===0){
//     console.log("is array")

// }

//Nullish coalescing Operator(??):null undefined
//its like if there is null and undefined then use the other value
// let val1
// // val1= undefined ?? null //output-null //if null and undefined is the option it will return the second option 
// val1= null ?? undefined  //undefined
// val1= 10 ?? undefined //10
// val1= null ?? 10      //10
// console.log(val1)

//ternary operator

let val=20
val<30 ?console.log("fail"):console.log("pass") //dont use paranthesis in condition it will return error







