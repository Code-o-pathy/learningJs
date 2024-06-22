const usera={
    username:"ankit",
    id:"akopay",
    age:22,
    getUserDetails:function(){
        console.log("got the details")
    }
}

function user(username){
    this.username=username;
    this.greetings=function(){
        console.log(`welcome ${this.username}`)
    }
    return this 
}
const one=new user("hitesh") //without using 'new' u will getmany more elements like functions and all but with new keyword u will get only desired info like 'username' in this eg
const two= new user('ankit')//one more benefit is when u use new keyword, u wont get undefined if u havent 'return return this' in the original object (line no 15)
console.log(two.greetings())
console.log(one.constructor) //this construction function is just  a  reference to the user

// console.log(user.getUserDetails())