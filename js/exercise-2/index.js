console.log('23')
let cont = document.getElementById('cont');
let btn = document.getElementById('btn')
cont.style.width = "300px";
cont.style.height = "100px";
cont.style.backgroundColor = "lightblue"
cont.style.marginTop = "20px" 



/// text Area
let txtArea = document.createElement('textarea');
	txtArea.style.width = "300px";
	txtArea.style.height = "100px";
	txtArea.id = "txtArea";
	txtArea.style.backgroundColor = "lightblue"

btn.addEventListener('click',function fun(e){
	e.preventDefault();
	
	cont.appendChild(txtArea)
})

txtArea.addEventListener('change',function f(e){
	let val = e.target.value;
	let count = 0;
	localStorage.setItem(`First${count}`,val);
	count ++;
})
localStorage.clear();