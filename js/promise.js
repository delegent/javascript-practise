function callTimeOut(){
	console.log("Your promise will be resolved in next 2 secs.")
	setTimeout(() => {
		console.log('Promise resolved');
	}, 2000);
}

// // example of resolving promise
// let promise = new Promise(function(resolve,reject){
// 	resolve(callTimeOut());
// })
function promiseRejected(){
	console.log("Trying to solve the promise ")
	setTimeout(() => {
	 console.log(new Error("Fuck!!!")); 
	}, 2000);
}

let promise = new Promise(function(resolve,reject){
	resolve();
})