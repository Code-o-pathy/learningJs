// const name="Ankit"
// let age=22
// console.log(name+" "+age)  //naive way
// console.log(`Hello my name is ${name} and my age is ${age}` ) //more sophisticated way; named as string interpolation

// const gameName=new String('Ankit-yadav')//new String is a different way to make a string, the upper way also calls this methd only behind the scenes, String is an object here, it comes with many predefined features and methods, like length key value pair and many things
// console.log(gameName.__proto__)//returns an object
// console.log(gameName.toUpperCase())
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('y'))//no case independent use the lower or upper depending on the string, here i used small y thats why Y will result in -1 and y in 5

// const newString=gameName.substring(0,8) //substring(8,0 ) will also give same result , ignores negative numbers and instead star t from 0
// console.log(newString)

// const newString=gameName.slice(-1,gameName.length)//negative no.s accepted, -1 will start from length -1, -length will start from beginnnign of start same as 0,
// console.log(newString)

const strings="a*^&^v  "
console.log(strings.codePointAt(2))
// console.log(strings.trim())//removes  whitespaces and line terminators from start and end; use trimStart() or trimEnd() acc to use 

const url="https://hitesh%20chaudhary"
console.log(url.replace('%20','-')) 


const stringss="ankit-yadav-dsa"
console.log(stringss.split('-'))