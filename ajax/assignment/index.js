const fruit = document.getElementById('fru');
fruit.addEventListener('click',()=>{
console.log('clicked...');
const xhr = new XMLHttpRequest();

xhr.open('GET','fruits.txt',true);

xhr.onload = function(){
		const data = JSON.parse(xhr.responseText);
		console.log(data);

		str = ""
		for(let i = 0 ; i < data.length ; i ++){
				str += `
					<li>${data}</li>
				`
		}
		console.log(str);
		const list = document.getElementById('list');
		list.innerHTML = str;
	}

xhr.send();

})