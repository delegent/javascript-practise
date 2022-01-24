console.log('Postman clone')

function getElementFromString(str){
	let div = document.createElement('div');
	div.innerHTML = str;
	return div.firstElementChild;
}




let addedParamCount = 0;
// hiding the parameters box initialllyu
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = "none";

// json and params hiding
let paramsRadio = document.getElementById('paramsRadio')

paramsRadio.addEventListener('click', () => {
	document.getElementById('requestJsonBox').style.display = "none";
	document.getElementById('parametersBox').style.display = "block";
})



let jsonRadio = document.getElementById('jsonRadio')

jsonRadio.addEventListener('click', () => {
	document.getElementById('parametersBox').style.display = "none";
	document.getElementById('requestJsonBox').style.display = "block";
})

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
	let params = document.getElementById('params');
	let string = `<div class="row form-row g-3 my-1">
	<label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
	<div class=" col-md-4">
		<input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Parameter ${addedParamCount + 2} Key">
	</div>
	<div class=" col-md-4">
		<input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Parameter ${addedParamCount + 2} Value">
	</div>

	<button class="btn btn-primary deleteParam col-md-1">-</button>
</div>`;
// converting element string to dom node
let paramElement = getElementFromString(string);
// console.log(paramElement);
params.appendChild(paramElement);
// adding the event listener to remove te prameter on clinking -
let deleteParam = document.getElementsByClassName('deleteParam');
for (item of deleteParam){
	item.addEventListener('click',(e)=>{
		console.log('clicked');
		// alert('Are you sure you want to delete');
		e.target.parentNode.remove();
	})
}

addedParamCount ++;


})

let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
	// show pleae wait in the reponce box to request patience from the user

	document.getElementById('responceJsonText').value = "Please Wait..."
	// fetch all the values user has enterd
	let url = document.getElementById('urlField').value;
	let requestType = document.querySelector("input[name ='requestType']:checked").value;
	let contentType = document.querySelector("input[name ='contentType']:checked").value;

	
	// 
	if(contentType == 'params'){
		data = {};
		for(let i = 0 ; i < addedParamCount + 1;i++){
			if(document.getElementById('parameterKey' + (i + 1)) != undefined){

				let key = document.getElementById('parameterKey' + (i + 1)).value;
				let value = document.getElementById('parameterValue' + (i + 1)).value;
				// console.log(value);
				data[key] = value;
			}
			data = JSON.stringify(data);
	
	
		}
	}else{
		data = document.getElementById('requestJsonText').value;
	}
	// log all the values to console
	console.log('url is',url);
	console.log('request type',requestType);
	console.log('content',contentType);
	console.log(data);

	if(requestType == 'GET'){
		fetch(url,{
			method:'GET',
		}).then(res=>res.text())
		.then((text)=>{
			document.getElementById('responceJsonText').value = text;
		})
	}else{
		fetch(url,{
			method:'POST',
			body:data,
			
			
		}).then(res=>res.text())
		.then((text)=>{
			document.getElementById('responceJsonText').value = text;
		})
	}


})