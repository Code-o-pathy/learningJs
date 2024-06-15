// function sayMyName(){
//     console.log("ankit")
// }

// sayMyName//this is just reference of the function
// sayMyName()
// function add(a,b){
//     let ans=a+b
// return ans//this is compulsory if u want to store the ans in a variable other wise the ans is just printed
// }
// let ans=1+add(2,7)
// console.log(ans);

// function loggedIn(username){ //(username ="sam") to never go in the if block, if user doesnt enters a name sam willl be default
//     if(username===undefined){  //(!username) is also correct way to do the same work
//         console.log("pls enter a username")
//         return
//     }
//     else{

//         return `${username}, just logged in` //if no username is passed then instead of that username it will show undefined, just logged in
//     }
// }
// let ans=loggedIn()
// console.log(ans)

// function calculateCartPrice(...num1){//the parameter passed along with rest operator, rest operator is used when u dont know about the total no of parameters, its use determines whether its rest operator or spread operator, if rest not used it will return only first argument
//     return num1; // returns whole argument in an array
// }
// console.log(calculateCartPrice(200,300,400,500))

const user = {
    username: "ankit",
    prices: 1999
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
//u can also pass the object as an argument
handleObject({
    username:"sam",
    price:900
})

const arr1=[12,13,14,15]
function arrSecond(arr1){
    return arr1[1]
}
const ans=arrSecond(arr1)
console.log(ans);