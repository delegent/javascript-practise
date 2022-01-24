console.log('17 -> event handling');

document.addEventListener('click',function(e) {
	console.log('you clicked the heading');
	console.log(e.target);
	let variable = e.offsetX
	variable = e.offsetY
	console.log(variable);
	//location.href = "//pepcoding.com"
});
/// more on events

















