//objects and dom events are imp in js
//objects can be declared in two ways, literals orr constructors,
//when created via constructors singleton is formed otherwise not
// Object.create (singleton method)



//object literals
// const mySym=Symbol("key1")
// const objectEg={
//     name:"Ankit",
//     "full name":"Ankit Yadav",
//     age:23,
//     location:"Mumbai",
//     email:"ay003735@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["sunday","Monday"],
//     [mySym]:"key1"
// }

// // //naive approach to access objects
// // console.log(objectEg.email)  //it has certain limitations like if u declare a key with space in between(like full name key in eg above) it cant be accessed also while accessing and creating symbol this has some limitations,
// // console.log(objectEg["email"])
// // console.log( objectEg["full name"])
// // console.log(objectEg.mySym)
// // console.log(objectEg)//way to print whole object

// // //manipulating object values
// // objectEg.email="ankit@google.com"
// // console.log(objectEg["email"])

// // //also u can freeze objects if u dont want someone else or you yourself to change the object 
// // console.log(Object.isFrozen(objectEg))//pass object name as argument or else it will return true everytime  //output false
// // Object.freeze(objectEg)
// // objectEg.name="AKOPAY" //this wont come into effect as the object is already freezed
// // console.log(objectEg["name"])
// // console.log(Object.isFrozen(objectEg)) //output true

// // console.log(objectEg.greeting) //undefined
// // console.log(objectEg.greeting()) //error not a function
// objectEg.greeting=function(){
//     console.log("hello world")
// }
// objectEg.greetingtwo=function(){
//     console.log(`hello objectEg, ${this["full name"]}`)//for space induced properties use [] else . is sufficient
//     console.log(`hello objectEg, ${this.name}`)
// }
// objectEg.greetingtwo()//hello world
// // console.log(objectEg.greeting)//returns an anonymous function  output=> [Function (anonymous)]


//objects (singleton)
// const tinderUser=new Object() //singleton object created
const tinderUser = {} //non-singleton object created
tinderUser.id = "123abc"
tinderUser.name = "rohan"
tinderUser.loggedIn = false
// console.log(tinderUser)

// //object in object
// const regularUser = {
//     email: "ay003735@gmail.com",
//     fullname: {
//         firstname: "ankit",
//         lastname: "yadav"
//     }
// }
// // console.log(regularUser)
// //accessing object in object
// // console.log(regularUser.fullname.firstname)
// //an optional chaining is also used like below
// // console.log(regularUser.fullname?.firstname)
// //its used when we get data from api and we aint confirm about the properties so we used this as prediction

// // merging objects
// const obj1={1:'a',2:'b',3:'c'}
// const obj2={4:'d',5:'e'}
// const obj4={5:'d',6:'e'}
// // const obj4={obj1,obj2}//not useful
// const obj3=Object.assign({},obj1,obj2,obj4)//the first thing is target and rest are source, if we dont use curly braces then all the properties will be copied in first object  like here first will be obj1 

// //or use spread operator 
// const obj5={...obj1, ...obj2, ...obj5}//latest no use of curly braces, easy
// // console.log(obj5)

// console.log(tinderUser);

//u can get all properties of objects in array by below commmand
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

//u can get all key value pair into arrays
// console.log(Object.entries(tinderUser)) //output=> [ [ 'id', '123abc' ], [ 'name', 'rohan' ], [ 'loggedIn', false ] ]


//if  u want to find out whether the object has a certain property or not 
// console.log(tinderUser.hasOwnProperty('loggedIn'))  //=>true
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //=>false




//destructuring of objects

const course={
    course:"js",
    price:999,
    instructor:"hitesh sir"

}
// course.instructor()//its naive
// course[instructor]//its naive too

// rather use
// const{instructor}=course;//now its usable as a variable
// console.log(instructor)

//also if u wanna use that prop with a shorrt name or alter  name 
// const{instructor:instr}=course;//now its usable as a variable
// console.log({instr})

//the above method is useful in react while acessing values
// const navbar=({company})=>{  //here destructuring of company property is used

// }

//JSON
//its like an object wihtout a name,it  include key value pair

// {
//     "name":"hitesh",
//     "price":1900,
//     "coursename":"JS"
// }

