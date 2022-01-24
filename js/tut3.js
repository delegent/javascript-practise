console.log('tut3')

// variables in js
// var let const
var name = `Anubhav`;
console.log(name);

var channel;
var marks = 12;
console.log(name,channel,marks);
marks = 0
console.log(marks);
/*
rules for creating variables
1. Cannot start with no's 
2. can start with letter, number, underscore, dollar.
3. variable names are case sensitive

*/
var city = "Kanpur";
console.log(city);
// let 
const cname = "Vaibhav";
console.log(cname);
// cname = "Anubhav" // cannot do this
// console.log(cname);
// const fruit; // must be initalised 

// let - block level scope
// var  global scope
{
	let city = "Kanpuria" 
	city = "kolkata"
	console.log(city) // kolkata
}
console.log(city) // Kanpur


const arr = [1,2,3,4,5]; // we can add the value
 /// arr = [1,2,3] // this will give error we cant reinitialize it
arr.push(45);
console.log(arr);


/*
most common programming case types:
1. camelCase
2. cabad-Case
3. snake_case
4. PascalCase
*/


























