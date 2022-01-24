console.log('14');
/*
DOM Selectors
element selecotors
1. single element selector
2. multiple eement selector


*/
// 1. single element selector
let ele = document.getElementById('first');
// console.log(ele);
// ele = ele.className;
// console.log(ele);
// ele = ele.childNodes
// console.log(ele);
// ele = ele.parentNode;
// console.log(ele);
ele.style.color = "red"
ele.innerText = "Hello"
ele.innerHTML = "<b>Bro</b>"
console.log(ele);
console.log(ele.innerHTML);



let sel = document.querySelector('#first');
sel = document.querySelector('.child')
sel = document.querySelector('h1')
// sel  = document.querySelector('div');
sel.style.color = "blue";
// console.log(sel)
 
// multi elemet selector
let clas = document.getElementsByClassName('child')
clas = document.getElementsByClassName('.container');
clas = document.getElementsByTagName('div')
console.log(clas);
Array.from(clas).forEach(element => {
	console.log(element);
	element.style.color = "red"
});
// console.log(clas[0].getElementsByClassName('child'));




