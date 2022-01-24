// // object oriented language
// objects
// classes
// encapsulation 
// Inheritance

console.log('23 -> object oriented');
h = {name:'Anubhav'}
console.log(typeof h);


// onject Literals for creating objects
let car = {
    name:"Maruti",
	topSpeed:189,
	run:()=>{
		console.log("running....");
	}
}

console.log(car);
//car.run();


// constructors
// like = new Date();
// creating the constructor for the class 
function GeneralCar(name,topSpeed){
	this.name = name;
	this.topSpeed = topSpeed;
	this.run = ()=>{
		console.log(`${this.name} is running ...... `);
	}
	this.analyse = function () {
		console.log(`This car is ${200-this.topSpeed} value , less than Mercedes`);
	}
}

let car1 = new GeneralCar('Nissan',120);
console.log(car1);
let car2 = new GeneralCar('Toyota',160);
console.log(car2);




























