console.log('18');

let btn = document.getElementById('btn')
btn.addEventListener('click',fun1);
btn.addEventListener('dblclick',fun2);
btn.addEventListener('mousedown',fun3);
function fun1(e)
{
	console.log('Thanks');
	e.preventDefault();
}

function fun2(e){
	console.log('double clicked ',e);
	e.preventDefault();
}
function fun3(e){
	console.log('mouse down',e);
}

document.addEventListener('mousemove',function f(e){
	console.log('working');
	document.body.style.backgroundColor = `rgb(${e.offsetX},${(e.offsetX)-56},${e.offsetY})`;
})
