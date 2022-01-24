console.log('Working..');
let logBtn = document.getElementById('log-btn')

logBtn.addEventListener('click',logData);

function logData(){
	console.log('Clicked the button..');
	const xhr = new XMLHttpRequest();
	const url = "https://jsonplaceholder.typicode.com/posts";
	xhr.open("GET",url,true);

	xhr.onload = function(){
		const data = JSON.parse(xhr.responseText);
		console.table(data);
	}
	

		xhr.send();
}

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click',addDOM);
function addDOM(){
	console.log('Clicked the button..');
	const xhr = new XMLHttpRequest();
	const url = "https://jsonplaceholder.typicode.com/posts";
	xhr.open("GET",url,true);

	xhr.onload = function(){
		const data = JSON.parse(xhr.responseText);
		
	
	const list = document.getElementById('list');
	str = "";
	for(let i = 0 ; i < data.length ; i++){
		console.log(data[i]);
			str += `
					<tr>
					<td>${data[i].userId}</td>
					<td>${data[i].id}</td>
					<td>${data[i].title}</td>
					<td>${data[i].body}</td>
					</tr>
			`

	}
	list.innerHTML = str;

}

		xhr.send();
	




}




