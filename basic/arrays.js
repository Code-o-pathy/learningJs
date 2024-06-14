// const myArray=[0,1,2,3,4,5,6,true,"hitesh"]
//shallow copy means share the same refefrence i.e. call by reference
//deep copy means do not share the same reference i.e. call by value
// const myArr2=new Array(1,2,3,4,5)
// myArr2.push(7)
// myArr2.push(8)//pushes from last
// myArr2.pop()//pops from last
// myArr2.unshift(0)//pushes in start
// myArr2.shift()//deletes from start 

//includes(return boolean) , indexOf(return index or -1 )
// console.log(myArr2.join()) //converts all elements of the array into strings  //1,2,3,4,5 output

// const myArrayi=myArr2.slice(1,3) //it returns the sub array without manipulating the original array, also doesnt include element at end's index  or eg A[1,2,3,4,5] slice(1,3)=>b[2,3]=>A[1,2,3,4,5]

// const myArrayi=myArr2.splice(1,3) //it returns a subarrray and also manipulates the original array it removes the whole subarray from the main array including element at end index . eg A[1,2,3,4,5] splice(1,3)=>b[2,3,5]=>A[1,5]
// console.log(myArrayi)
// console.log(myArr2)


const marvel_heroes=["ironman","loki","thor","antman"]
const dc_heroes=["superman","batman","flash","aquaman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)//this returns array in a array


//better way is to use concat method this returns a new array of concatenated arrays
// const newALl=marvel_heroes.concat(dc_heroes)
// console.log(newALl)

//one more way which will give the same result as concat but it is mostly used (spread method) , better than above cause we can add more than 2 at a time but in concat we can add only 2 at a time
// const new_All=[...marvel_heroes,...dc_heroes]
// console.log(new_All)
 
// const new_Array=[1,2,3,[4,5,6,7],8,[9,[10,11,12]]]
// console.log(new_Array)
// //if we want all the elements without those array in array in array paradigm use flat, pass depth till which u want to do, infinity if u dont know the depth
// const another_new_array=new_Array.flat(Infinity)
// console.log(another_new_array)

//verify datatype of gotten data if its array or not
// const data="ankit"
// console.log(Array.isArray(data))

//now if u want to convert a non array to array use from , also if it cant convert to an array it returns empty array 
// console.log(Array.from(data))
// console.log(Array.from({name:"ankit"}))

// let score1=100
// let score2=1000
// let score3=10000
// console.log(Array.of(score1,score2,score3)) //makes array of multiple inputs
