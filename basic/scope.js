// //global scope
// {
//     //block scope
//     let a=10
//     var b=20
//     const c=30
// }
// var b=10
// var b=10 //can redeclare var any no of time, also it has no scope definition
// let a=12;

// // console.log(a)
// console.log(b)//accessible outside the scope

// // console.log(c)


// console.log(add1(23))
// function add1(num){ //u can access this function before its declaration 
//     return num+1
// }

// console.log(addtwo(23)) //cant acccess this before its declaration because its assigned to a variable
// const addtwo=function(num){//these are called expressions, cause the function is assigned to a variable
//     return num+2
// }

// const user={
//     username:"hitesh",
//     price:999,
//     welcomemsg:function(){
//         console.log(`${this.username}, welcome`) //this is used to point current context
//         console.log(this)//prints entire current context that is the whole object
//     }
// }
// user.welcomemsg()
// // user.username="sam"
// // user.welcomemsg()
// console.log(this)//this prints the global context that is {}=> empty when the same is run in website inspect there global context is window


// function random(){
//     const username="hello"
//     console.log(this)//function has some heavy a** context , but this keyword doesnt work as intended in functions, in web browsers this keyword inn function results the same window objects that are returned in global context
// }
// random()

// function chai(){
//     console.log(this)
// }
// chai()

// const chai=function(){
//     console.log(this)
// }
// chai()


// const chai=()=>{
//     console.log(this) //unlike anonymous and normal functions this keyword doesnt return any thing in arrow functions,while in web browsers it will return the same window object of global context
// }

// // arrow function with implicit return
// const ans=(num1,num2)=>num1+num2 //or(num1 +num2 )using paranthesis to make it readable     //no need of curly braces and return keyword restriction is that all should be in one line ,
// const ans2=(num1,num2)=>({username:"hitesh"})//use curly braces only to return objects,paranthesis is  necessary for objects but just for reabability and is optional in other datatypes
// console.log(ans2(2,3))



//Immediately invoked function expression (IIFE) self explanatory explanation
// ()() =>syntax is like this in first paranthesis u declare function and in second u IIFE it

//named IIFE without parameters
(function chai(){
    console.log(`DB connected`)
})()
function chai2(){
    console.log("hello")
}
chai2();
//whenever u use multiple IIFE make sure to use a ; before every new IIFE to not get context error

//unnamed IIFE with parameters
((name)=>{
    console.log(`DB connected,${name}`)
})('hitesh')


