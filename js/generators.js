// demo of generators

// generators are the special types of functions that are created for returning out more than one values
// the generator function starts with the * infront of thw function name
// and returns the value with the yield keyword.

function* demoGenerator(arr){
	// console.log(2 + 3);
	// yield 1;
	// // console.log("First Task Completed");
	// // console.log(33 + 8);

	// yield 2;
	// // console.log("Second Task Completed");
	// yield 3;
	// // console.log("Third task Cmpleted")

	// using as a Id generator
	// let id = 1;
	// while(true){
	// 	yield id;
	// 	id ++;
	// }


	for(let i = 0 ; i < arr.length;i++){
		yield arr[i];
	}
}


let generatorObject = demoGenerator([1,2,3,4,333]);
// let generatorObject2 = demoGenerator();
console.log(generatorObject.next());
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
while(generatorObject.next().done != true){
	console.log(generatorObject.next().value);
}










