// let myDate=new Date() //date is an object
// console.log(myDate)
// console.log(myDate.toString())
// //Thu Jun 13 2024 05:59:30 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())
// //Thu Jun 13 2024
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())


// 2024-06-13T06:05:22.256Z
// Thu Jun 13 2024 06:05:22 GMT+0000 (Coordinated Universal Time)
// Thu Jun 13 2024
// 2024-06-13T06:05:22.256Z
// 2024-06-13T06:05:22.256Z
// 6/13/2024
// 6/13/2024, 6:05:22 AM
// 06:05:22 GMT+0000 (Coordinated Universal Time)
// // Thu, 13 Jun 2024 06:05:22 GMT

// let myNewDate=new Date(2023,11,23)
// let myNewDate=new Date(2023,11,23,5,13)
// console.log(myNewDate.toDateString())

let myDate=new Date(2024,5,9);
console.log(myDate.getMonth())//0 is jan
console.log(myDate.getDay())//day of the week sunday is 0
console.log(myDate.getTime())
console.log(Date.now())