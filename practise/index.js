let btn = document.querySelector('#btn');
let inp = document.querySelector('#inp');
let data = document.querySelector('#data');

btn.addEventListener('click',function(){
	var val = inp.value;
	inp.style.display = "none";
	data.innerHTML = `<h1>${val}</h1>`
})
console.log(val)