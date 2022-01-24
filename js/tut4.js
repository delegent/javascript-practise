/*
Data Types 
1. Primitive -> Stack Memory 
  String  "",'',``
  Number  1,2,3...
  Boolean true false
  null   
  undefined   declared variable
  Symbol     

2. Reference -> Heap Memory
   Array
   Object 
   Function
   Date 
*/

// String 
let name = "Anubhav"
console.log(name + "yo ");
console.log('Data Type is ' + typeof(name));

let no = 90
console.log(no );
console.log('Data Type is ' + typeof(no));


let isDriver = true;
console.log(isDriver);
console.log('Data Type is ' + typeof(isDriver));

let nullVar = null;
console.log('Data Type is ' + typeof(nullVar));

let undef = undefined;
console.log('Data Type is ' + typeof(undef));


// reference datatype -> allocated at heap
arr = [1,2,3,4,5,'anubhav',true];
console.log('Data Type is ' + typeof(arr));


// object literals
let smarks = {
	'Harry':34,
	'shubham':36
}
console.log(smarks);
console.table(smarks)
console.log('Data Type is ' + typeof(smarks));


function fname() {
	
}
console.log(typeof(fname));

let date = new Date()
console.log(typeof(date));