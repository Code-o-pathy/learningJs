class user{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
// const chai=new user('ankit')
// console.log(chai)



/*

without syntactical sugar of 'extends and super' keyword

function createUser(username,email,id){
    setUserName.call(this,username) //so what happens is,it is called and then execcuted and gets out of the call stack so in order to keep  a hold of it we would have to keep a reference of it using 'call' keyword,
    //with 'call' use 'this' keyword so the context is also passed, and after executing the value is 'returned' to called function.
    this.email=email
    this.id=id
}
*/


// with syntactical sugar of 'extends and super' keyword


class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}
const chai=new teacher('chaipati','chai@email.com','abc')
const masalaChai=new user('chai')
// masalaChai.logMe()
// chai.logMe()
// chai.addCourse()
// console.log(chai)
// console.log(masalaChai)
console.log(chai instanceof teacher)
console.log(chai instanceof user)