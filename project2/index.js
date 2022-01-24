
console.log('Working in the index js librarys file');

// constructor
function Book(name, author, type) {
	this.name = name;
	this.author = author;
	this.type = type;
}

/// display constructor
function Display() {

}

Display.prototype.add = function (book) {
	//  console.log('Adding to the UI');
	let tableBody = document.getElementById('tableBody');
	let data = localStorage.getItem('data');
	if(data === null){
		dataObj = [];
	}else{
         dataObj = JSON.parse(data);
	}
	let myObj = {
		name:book.name,
		author:book.author,
		type:book.type
	}
	dataObj.push(myObj)
	localStorage.setItem('data',JSON.stringify(dataObj));
	console.log(dataObj);

	

	
}
Display.prototype.showData = function(){
	let data = localStorage.getItem('data');
	if(data === null){
		dataObj = [];
	}else{
         dataObj = JSON.parse(data);
	}
	let uiString = ""	
	Array.from(dataObj).forEach((function(e,i){
		console.log(e.name,i);
		uiString += `
		<tr>
		  <td>${e.name}</td>
		  <td>${e.author}</td>
		  <td>${e.type}</td>
		  <td><button id = "${i}" onclick = "deleteNode(this.id)"  class="btn btn-primary">Remove</button></td>
		</tr>
`;
	}))

    
	tableBody.innerHTML = uiString;
}
Display.prototype.clear = function () {
	let libraryForm = document.getElementById('form');
	libraryForm.reset();
}

Display.prototype.validate = function (book) {
	if (book.name.length < 3 || book.author.length < 3) {
		return false;
	} else {
		return true;
	}
}


Display.prototype.show = function (value,msge) {
	let msg = document.getElementById('msg');
	msg.innerHTML = `
					<div class="alert alert-${value} alert-dismissible fade show" role="alert">
				       <strong>Message!</strong> ${msge}
				       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>`
	setTimeout(() => {
		msg.innerHTML = "";
	}, 3000);



}
let display = new Display();
display.showData();


function deleteNode(index){
	console.log(index," working");
	let data = localStorage.getItem('data');
	if(data === null){
		dataObj = [];
	}else{
         dataObj = JSON.parse(data);
	}
	
	dataObj.splice(index,1);
	localStorage.setItem('data',JSON.stringify(dataObj));
	display.showData();
}

// add methids to display the prototype
let libraryForm = document.getElementById('form');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
	let name = document.getElementById('bookName').value;
	let author = document.getElementById('author').value;
	let type;
	let fiction = document.getElementById('fiction');
	let programming = document.getElementById('programming');
	let motivation = document.getElementById('motivation');
	if (fiction.checked) {
		type = fiction.value;
	} else if (programming.checked) {
		type = programming.value;
	} else if (motivation.checked) {
		type = motivation.value;
	}
	let book = new Book(name, author, type);
	console.log(book);

	
	if (display.validate(book)) {

		display.add(book);
		display.showData();
		display.clear();
		let msg = "Successfully added! "
		display.show('success',msg);
	} else {
		// show error to the user
		let msg = "Error! in adding the books"
		display.show('danger',msg);
	}

	e.preventDefault();
	// console.log('You have submitted!');





}












