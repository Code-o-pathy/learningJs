// // by using class
// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User('chai','chai@email.ccom','ww99w')
// console.log(chai)


//without using class

function User(username,password,email){
    this.username=username;
    this.password=password;
    this.email=email;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}
const chai=new User("ankit",'ay','ay003735@gmail.com')
console.log(chai)
console.log(chai.changeUserName())