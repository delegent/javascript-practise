// Arrays and Objects in Java
console.log('tut7');
let marks = [1,2,3,4,5]
const fruits = ["Apple","Banana","Orange"]
const mix = ['str',89,[1,2]]
const arr  = new Array(23,56.2,'Anubhav')
console.log(arr);
console.log(mix);
console.log(fruits);
console.log(arr.length);
console.log(Array.isArray([12]));
arr[0] = "A"
console.log(arr);

let val = marks.indexOf(5)
console.log(val);

// mutating or modifying arrays
marks.push(123)
console.log(marks);
marks.unshift(1222)
console.log(marks);
marks.pop()
console.log(marks);
marks.shift()
console.log(marks);
// marks.splice(1,4) // remove until the thimgs happens
console.log(marks);
marks.reverse()
console.log(marks);
let marks2 = [1,2,3]
marks = marks.concat(marks2);
console.log(marks);
/// objects

let obj = {
	name:"Anubhav",
	channel:"Anubhav Studio",
	isActive:true,
	marks:[1,2,3,4]
}
console.log(obj);









