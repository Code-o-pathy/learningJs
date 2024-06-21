//js is a synchronous lang
//single threaded
//blocking code vs nonblocking code
//blocking code-blocks the flow of program and non blocking code doesnt block the flow of the program
//example of blocking code is reading a file Sync(program stops operating until file is read)
//example of non blocking code is reading a file ASync(program continues operating while file is read)
//although non lbocking is advantageous but it has limitations
//assume u got some user data u have to modify the file by saving that data. u send the command and continue on your program thinking its good , but if modifying fails u havent been waiting to correct it. thats the problem
//so blocking nonblocking sync async depends on use case

//qn what will be the order of excn
// console.log(1)
// setTimeout(function(){
//     console.log(2)
// },0);
// setTimeout(function(){
//     console.log(3)
// },0);
// console.log(4)
//1,4,2,3
//1 ,3,2
// although the time is 0ms but it will be a callback and after set time it will go in task queue till then next line will be executed