// class user{
//     constructor(username,id,productPrice){
//         this.username=username
//         this.id=id
//         this.productPrice=productPrice
//     }
//     get id(){
//         return this._id+1
//     }
//     set id(value){
//         this._id=value
//     }
// }

// function user(email,username){
//     this._email=email
//     this._username=username
//      Object.defineProperty(this,'email',{
//         get:function(){
//             return 'email'+" not available"
//         },
//         set: function(value){
//             return this._email=value
//         }
//      })
// }


const user={
    username:'ankit',
    email:'ay003735',
    id:123,
    get email(){
        return 'email is not available'
    },
    set email(value){
        this._email=value
    }
}

const chai=Object.create(user)
console.log(chai.email)