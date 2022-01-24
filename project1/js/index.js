console.log('Notes app');
showNotes();
// idf user adds the note add to the local storage

let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click',function(e){
	let addTxt = document.getElementById('add-txt');
	let addTitle = document.getElementById('add-title');
	let notes = localStorage.getItem('notes');
	if(notes === null){
		notesObj = [];
	}else{
		notesObj = JSON.parse(notes);
		}
	let myNote = {
		title:addTitle.value,
		text:addTxt.value
	};
	console.log(typeof notesObj);
	notesObj.push(myNote)
	localStorage.setItem('notes',JSON.stringify(notesObj));
	addTxt.value = "";
	addTitle.value = "";
	//console.log(notesObj);
	showNotes();
});



function showNotes(){
	let notes = localStorage.getItem('notes')
	if(notes === null){
		notesObj = [];
	}else{
		notesObj = JSON.parse(notes);
	}
	let html = "";
	Array.from(notesObj).forEach((function(e,i){
			html += `
			<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Note ${e.title}</h5>
				<p class="card-text">${e.text}</p>
				<button id = "${i}" onclick = "deleteNode(this.id)"  class="btn btn-primary">Delete Note</button>
			</div>
		</div>`

	}));

	let notesElem = document.getElementById('notes');
	if(notesObj.length!=0){
		notesElem.innerHTML = html;
	}else{
		notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`; 
		}
}

// deleting the notes
function deleteNode(index){
	console.log("working on ", index);
	let notes = localStorage.getItem('notes');
	if(notes === null){
		notesObj = [];
	}else{
		notesObj = JSON.parse(notes);
		}
		notesObj.splice(index,1);
		localStorage.setItem('notes',JSON.stringify(notesObj));
		showNotes();
	//console.log(typeof notesObj);
}

let search = document.getElementById('searchText');
search.addEventListener('input',function(e){
	let inputVal = search.value;
	console.log('Input event fired',inputVal);
	let cards = document.getElementsByClassName('noteCard')
	Array.from(cards).forEach(function(e){
		let cardtxt = e.getElementsByTagName('p')[0];
		// console.log(cardtxt);
		if(cardtxt.innerText.includes(inputVal)){
			e.style.display = "block";
		}else{
			e.style.display = "none";
		}
	})



});
