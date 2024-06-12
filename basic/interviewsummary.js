// video 9 for interviews
//JS is a dynamically typed language,meaning datatype is not declared but inferred by compiler,ts is statically typed.

//depending upon how data is stored 2 types are there
//primitive(call by value )
//string,number,boolean,null,undefined,symbol(for uniqueness),BigInt

// let str="ankit"
// let age=20
// let email=undefined
// let bodyTemp=null
// let studying=true
// const id=Symbol('123')
// const anotherId=Symbol('123') (id!==anotherId)
// const bigNumber=7324728785257925688723
// console.log(bigNumber)

//except null (type is object ) all are what they are i.e. numbers type is number , strings is string and so on


//reference (non primitive)(call by reference)
//array,objects,functions

//typeof array and objects is said to be objects, and of function it is object function but compiler will return function only
const heroes=["MK Gandhi","Bhagat Singh","Chandrashekhar Azad","Mangal Pandey","Sadguru","Jawaharlal Nehru","Subhash Chandra Bose"]
let myObj={
    name:"Ankit",
    age:22

}
const myFunction=function(){

    console.log("hello world");
    }
    
    console.log(typeof myObj);
    console.log(typeof myFunction);
    console.log(typeof heroes);
