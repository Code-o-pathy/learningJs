// const usera={
//     username:"ankit",
//     id:"akopay",
//     age:22,
//     getUserDetails:function(){
//         console.log("got the details")
//     }
// }

// function user(username){
//     this.username=username;
//     this.greetings=function(){
//         console.log(`welcome ${this.username}`)
//     }
//     return this 
// }
// const one=new user("hitesh") //without using 'new' u will getmany more elements like functions and all but with new keyword u will get only desired info like 'username' in this eg
// const two= new user('ankit')//one more benefit is when u use new keyword, u wont get undefined if u havent 'return return this' in the original object (line no 15)
// console.log(two.greetings())
// console.log(one.constructor) //this construction function is just  a  reference to the user

// console.log(user.getUserDetails())



function setUserName(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,id){
    setUserName.call(this,username) //so what happens is,it is called and then execcuted and gets out of the call stack so in order to keep  a hold of it we would have to keep a reference of it using 'call' keyword,
    //with 'call' use 'this' keyword so the context is also passed, and after executing the value is 'returned' to called function.
    this.email=email
    this.id=id
}

// const chai=new createUser('chai','chai@email.com',12)    //output createUser { email: 'chai@email.com', id: 12 }
// console.log(chai)
const chai=new createUser('chai','chai@email.com',12)  //createUser { username: 'chai', email: 'chai@email.com', id: 12 }
console.log(chai)