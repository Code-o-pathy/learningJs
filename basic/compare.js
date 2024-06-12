// console.log("2">1)
// console.log("02">1) //both true js automatically converts string to no to compare them both, comparing values of different datatypes is forbidden in ts.
// console.log(null==0) //false doesnt convert to a no. thus false
// console.log(null>0)  //treatsnull as 0 thus false
// console.log(null<0) //treatsnull as 0 thus false 
// console.log(null<=0) //treatsnull as 0 thus true //true
// console.log(null>=0) //true //treatsnull as 0 thus true

//the reason is that comparison(>,<,>=,<=) work diffferently than equality checks(==,!=). the comparison check makes null convert to a number treating it as 0 and thus  line 6 null>=0 is true and since equality doesnt convert it to a no. it gives false


// console.log(undefined==0) 
// console.log(undefined>0)  
// console.log(undefined<0)
// console.log(undefined<=0) 
// console.log(undefined>=0) //all false


//difference between == and ====  
//==compares value without considering their datatypes what it actually does is it converts the datatypes, but === checks the values as well as their data types and it strictly doesnt let type conversion;
// console.log("12"==12) //true
// console.log("1"===1)//false

