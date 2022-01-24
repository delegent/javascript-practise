// type conversiona nd type coersion

console.log('tut5');
let mvar = 34;
// console.log(mvar, typeof mvar);
mvar = String(34);

// console.log(mvar, typeof mvar);
let boolvar = String(true);
// console.log(boolvar, typeof boolvar);
let date = String(new Date())
// console.log(date, typeof date);

let arr = String([12,3,4,5])
// console.log(arr,arr.length,typeof arr)


let i = true// 8;
// console.log(i.toString()); // converts any thing to string for everything almost
let str = Number("3434")
str1 = Number('34d5')
str2 = Number(true) // true 1 false 0
console.log(str ,str1,str2,typeof str,typeof str1, typeof str2);




// parseInt
let no = '34';
no = parseInt('34.56')
console.log(no);
no = parseFloat('34.56')
console.log(no);
no = "1234.5555556"
console.log(parseFloat(no).toFixed(2));

/////////////////////////////////////////
// type coersion
let mystr = "698"
let myNum = 34;
console.log(mystr + myNum); // concatenation
console.log(Number(mystr) + myNum);

