//iterations ==loops
//for loop

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// for(let i=0;i<10;i++){
//     console.log(`outer loop i ${i}`)
//     for(let j=0;j<10;j++){
//         console.log(`inner loop i ${j}`)
//     }
// }

//while iterating over an array when u reach out of bound it returns undefined and not out of bound error like java

//break and continue
// for(let i=1;i<=20;i++){

//     if(i==5){
//         console.log("detected 5")
//         break;
//     }
//     console.log(`value is ${i}`)
// }

// for(let i=1;i<=20;i++){
//     if(i%5==0){
//         continue;
//     }
//     console.log(`${i}`)
// }

// let myArr=["batman","superman","flash"]
// let i=0
// while(i<myArr.length){
//     console.log(`${myArr[i]}`)
//     i++
// }

//evenodd using do while

// let score=9
// do{
//     console.log(`${score}`)
//     score--
// }while(score>0)



//specialized array loops

const myArr=[1,2,3,4,5,6]
// for (const num of myArr) {
//     console.log(num)
// }
// const greet="hello friends"

// for (const iterator of greet) {
//     if(iterator==" "){
//         continue;
//     }
//     console.log(iterator) 
// }

//maps consist only unique values and in specified order
// const map=new Map()
// map.set('a',23)
// map.set('b',24)
// map.set('c',25)
// console.log(map.size)
// // map.delete('a')
// console.log(map)

// for (const key of map) { //output will give each key value pair in an array
//     console.log(key)
// }

// for (const [key,value] of map) { //output wont be in an array
//     console.log(key," ",value)
// }

const myObj={
    game: "valo",
    id:"akopay"
}

// for (const iterator of myObj) {//object is not iterable by for of
//     console.log(myObj)
// }


//for iterating over object use for in loop
for (const key in myObj) {
    console.log(`value for ${key} is ${myObj[key]}`)
}


//for in loop is not useful for arrays as it will print its keys and not values stored at keys but u can pass that keys to find values
// for (const key in myArr) { //prints  keys
//     console.log(key)

// }
for (const key in myArr) { //prints values at those keys
    console.log(myArr[key])

}

