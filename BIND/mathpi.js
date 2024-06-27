// const desc=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(desc)

const chai={
    name:'ginger',
    price:250,
    isAvailable:true,
    order:function(){
        console.log("chai fat gayi")
    }
}


console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

chai.name="rahul"
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){

        console.log(key+" : "+value)
    }
}