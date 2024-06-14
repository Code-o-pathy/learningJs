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

function loggedIn(username){ //(username ="sam") to never go in the if block, if user doesnt enters a name sam willl be default
    if(username===undefined){  //(!username) is also correct way to do the same work
        console.log("pls enter a username")
        return
    }
    else{

        return `${username}, just logged in` //if no username is passed then instead of that username it will show undefined, just logged in
    }
}
let ans=loggedIn()
console.log(ans)