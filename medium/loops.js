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

// const myArr=[1,2,3,4,5,6]
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
// const map = new Map()
// map.set('a', 23)
// map.set('b', 24)
// map.set('c', 25)
// console.log(map.size)
// map.delete('a')
// console.log(map)

// for (const key of map) { //output will give each key value pair in an array
//     console.log(key)
// }

// for (const [key,value] of map) { //output wont be in an array
//     console.log(key," ",value)
// }

// const myObj={
//     game: "valo",
//     id:"akopay"
// }

// for (const iterator of myObj) {//object is not iterable by for of
//     console.log(myObj)
// }


//for iterating over object use for in loop
// for (const key in myObj) {
//     console.log(`value for ${key} is ${myObj[key]}`)
// }


//for in loop is not useful for arrays as it will print its keys and not values stored at keys but u can pass that keys to find values
// for (const key in myArr) { //prints  keys
//     console.log(key)

// }
// for (const key in myArr) { //prints values at those keys
//     console.log(myArr[key])

// }



//not iteratable using for in loop
// for (const key in map) {
//     console.log(key)
// }




//for each loop
// const arr = ["JS", "C++", "Java", "HTML", "CSS"]

// arrr.forEach(element => {  //arrow function as callback
//     console.log(element)
// });

// arrr.forEach(function(name){ //normal function as callback
//     console.log(name)
// })

// function print(item){
//     console.log(item)
// }
// arrr.forEach(print) //reference of a function as a callback

// arrr.forEach((item,index,arr)=>{
// console.log(item,index,arr)
// })

//output of above code

// JS 0 [ 'JS', 'C++', 'Java', 'HTML', 'CSS' ]
// C++ 1 [ 'JS', 'C++', 'Java', 'HTML', 'CSS' ]
// Java 2 [ 'JS', 'C++', 'Java', 'HTML', 'CSS' ]
// HTML 3 [ 'JS', 'C++', 'Java', 'HTML', 'CSS' ]
// CSS 4 [ 'JS', 'C++', 'Java', 'HTML', 'CSS' ]

// const myCoding = [{ languageName: 'JavaScript', fileName: 'js' }, { languageName: 'Python', fileName: 'py' }, { languageName: 'C++', fileName: 'cpp' }]
// myCoding.forEach((item)=>{
//     console.log(item.fileName)  //this function prints the function, but does not return any thing if you want to return anything follow below code
// })

// const ans=myCoding.forEach((item)=>{ 
//     console.log(item.fileName)  
//     return item.fileName;  //so for each doesnot return anything
// })
// console.log(ans)  //output will be undefined cause for each hasnt return anything

// const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const ans = arrr.filter((item) =>
//     item>4
// )//returns the value if u pass the condition   //dont use curly braces and if u want to use then use return keyword too
// console.log(ans)  

// also if u want to use for each only then follow below code
// const newNums=[]
// arrr.forEach((nums)=>{
//     (nums>4)?newNums.push(nums):console.log(nums)
// })  
// console.log(newNums)

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// let ans = books.filter((book) => book.publish >= 2000)
// ans = books.filter((book) => { return book.publish >= 2000 })  //same output as above 
// ans = books.filter((book) => book.publish >= 1986 && (book.genre=='Fiction' || book.genre=='Non-Fiction'))
// console.log(ans)




// const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const ans=arrr.map((num)=>num+10) //same syntax as of filter
// console.log(ans)

//chaining-chaining is using multiple methods like map on map or map on filter or vice versa
//for eg
// const ans = arrr
//                 .map((num) => num + 10) //  output of this method [
//                     // 11, 12, 13, 14, 15,
//                     // 16, 17, 18, 19, 20
//                     //   ]                 
//                     //this passes its output to next method in chain


//                 .map((num) => num + 10) // [
//                 //     21, 22, 23, 24, 25,
//                 //     26, 27, 28, 29, 30
//                 //   ]
//                 //and so on, then last does it job and passes output to variable
//                 .filter((num)=>num%2==0)  //[ 22, 24, 26, 28, 30 ]
// console.log(ans)


// const arr=[1,22,3,4,5]
// const initialValue=0
// const ans=arr.reduce((accumulator,currentValue)=>accumulator+currentValue)//this is by using arrow function  //uses first element as accumulator and second as curr value if initialValue is not defined 
// //u can use normal function too
// // const ans=arr.reduce(function(acc,value){
// //     console.log(`acc value is ${acc} and curr value is ${value}`)
// //     return acc+value
// // },0) //it by default takes arr[0] as acc and arr[1] as ccurr if u dont give values 
// console.log(ans)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const ans=shoppingCart.reduce((acc,item)=>item.price+acc,0)
console.log(ans)