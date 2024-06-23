// function multiply(num){
//     return num*5
// }


// console.log(multiply(5))
// console.log(multiply.power=6)
// console.log(multiply.prototype)

// // output
// // 25
// // 2
// // {}  -this is because by default a context is set for every function so this is that 'this' context of that method

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = new createUser("tea", 250)

// chai.increment()
// tea.increment()

// chai.printMe()
// tea.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


let myName = "                  ankit               "
// console.log(myName.length) output 20 intended was 5

let heroes = ["Gandhi", "MahatmaPhule", "Azad", "BhagatSingh"]

// Object.prototype.hitesh=function(){ //this gives hitesh() to every object in js
//     console.log(`hitesh is present in all`)
// }


// Array.prototype.hiHitesh=function(){
//     console.log("I am HIM")
// }

// String.prototype.trueLength=function(){
//     console.log(`${this}`) //this will print the string as whole, like all spaces and indentations
//     console.log(`The truelenght is ${this.trim().length}`)
// } 


// myName.trueLength()
// heroes.hitesh()
// heroes.hiHitesh()

const user = {
    name: "chai",
    email: "chai@gmail.com"

}
const teacher = {
    teaches: true

}
const teachingSupport = {
    isAvailable: true,
    // __proto__:teacher //this means u can access the teaher object and props

}
const teachingAssistant = {
    makesTest:'js assignment',
    fulltime:true,
    __proto__:teachingSupport  //this is giving prototypal inheritance //this means u can access the teahingSupport object and props

}

//u can give that prototypal inheritance even outside o obect

teacher.__proto__=user;
console.log(teacher.name) //without above line it will give undeined as it wont have access to the name prop from its intended parent class


//modern syntax to give props of other object
Object.setPrototypeOf(teachingSupport,teacher)
console.log(teachingSupport.name)


// console.log(teachingAssistant.teaches) //without providing inheritance it will give undefined 
// console.log(teachingAssistant.isAvailable)