//promise
//promise is an object
// the 'promise' object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
//promise was introduced in ES6 before that this functionalities were done  by using  libraries like bluebird and Qlibrary
//promise has states
//fulfilled
//pending
//rejected
// fetch('https://somthng.com').then().catch().finally() //this is called as consuming a promise 

//way 1 to create promise and save it in the variable
// const promise1=new Promise(function(resolve,reject){ //creation of promise
//     //Do an async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve() //this is a link between 'then' and resolve,it is only after this linkage that below then function will execute
//     },1000)
// })
// promise1.then(function(){
//     console.log("promise  consumed")
// })  //consuming

//way to directly create and consumme
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("hello")
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("resolved")
// })

// const promise3=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"chai",email:"chai@example.com"})        
//     }, 1000);
// })

// promise3.then(function(user){
//     console.log(user)
// })
// const promise4 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "ankit", email: "ay003735@gmail.com" })
//         }
//         else {
//             reject('ERROR: Something went wring')
//         }
//     }, 1000);
// })

// promise4.then(function (user) {
//     console.log(user)
//     return user.username
// }).then((username) => {  //then.then this is called chaining u can as much function as u want, this leads to callback hell
//     console.log(username)
// }).catch(function (error) {


//     console.log("error")
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })


// const promise5 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "js", password: "123" })
//         }
//         else {
//             reject('error:js went wrong')
//         }
//     }, 1000);
// })
// async function consumePromise5() {
//     try {
//         const response = await promise5
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromise5()

async function getAllUsers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json(); //it takes time to convert so 'await' it
        console.log(data) 
    } catch (error) {
        console.log('error',error)
    }
}
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    console.log('response')
    return response.json()
}).then((response)=>{  //no need to wait
    
    console.log(response)
}).catch((error)=>{
    console.log(error)
})