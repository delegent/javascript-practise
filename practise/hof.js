// Functional programming in JavaScript 



// let radius = [3,4,2,7,8,13,33,44];

// function calculateArea(radius){
// 	let ans = [];
// 	for(let i = 0 ; i < radius.length ; i++){
// 	  ans.push(Math.PI * radius[i] * radius[i]);
// 	}
// 	return ans;
// }


// function calculateCircumference(radius){
// 	let ans = [];
// 	for(let i = 0 ; i < radius.length ; i++){
// 		ans.push(2 * Math.PI * radius[i]);
// 	}
// 	return ans;
// }

// function diameter(radius){
// 	let ans = [];
// 	for(let i = 0 ; i < radius.length ; i++){
// 		ans.push(2  * radius[i]);
// 	}
// 	return ans;
// }


// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(diameter(radius));


// Higher Order Functions
// function operation(radius, logic){ 
// 	let ans = [];
// 	for(let i = 0 ; i < radius.length ; i++){
// 		ans.push(logic(radius[i]));
// 	}
// 	return ans;
// }

// function area(radius){
// 	return Math.PI * radius * radius;
// }

// function circum(r){
// 	return 2 *  Math.PI * r;
// }

// function diameter(r){
// 	return 2 * r;
// }

// console.log(operation(radius,area));
// console.log(operation(radius,circum));
// console.log(operation(radius,diameter));


// let areaArray = radius.map(function (e){
// 	return Math.PI * e * e; 
// }); // do something in the comdition and return the output in the form of the array

// console.log(areaArray);

// making our own map function of array

// Array.prototype.myMap = function(logic){
// 	let ans = [];
// 	for(let i = 0 ; i < this.length ; i++){
// 		ans.push(logic(this[i]));
// 	}
// 	return ans;
// }

// let areaArraymyAns = radius.myMap(area);
// console.log(areaArraymyAns);

// function condition(e)
// {
// 	return (e%2 === 1)
// }
// let filteredArray = radius.filter(condition);
// console.log(filteredArray);

// My own filter function

// function myFilter(radius,logic) {
// 	let ans = [];
// 	// console.log(logic);
// 	for(let i = 0 ; i < radius.length ; i++){
// 		if(logic(radius[i])){
// 			ans.push(radius[i]);
// 		}
// 	}
// 	return ans;
// }


// console.log(myFilter(radius,condition));

// making thse fucntion to be accessable like .filter

// Array.prototype.myFilter = function(logic){
// 	let ans = [];
// 	for(let i = 0 ; i < this.length ; i++){
// 		if(logic(this[i])){
// 			ans.push(this[i])
// 		}
// 	}
// 	return ans;
// }

// let myFilteredArray = radius.myFilter(condition);
// console.log(myFilteredArray);

// Reduce 

// let sumOfArray = radius.reduce(addSum,0);

// function addSum(accumulator, e){
// 	return accumulator + e;
// }

// console.log(sumOfArray);



















































