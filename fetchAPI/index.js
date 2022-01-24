// console.log('Connected to the server!');

// let myBtn = document.getElementById('my-btn');
// let content = document.getElementById('content');
// myBtn.addEventListener('click',()=>{
// 	console.log('clicked!');
// })
// // get request
// function getData(){
// 	console.log('Started!');
// 	url = "https://api.github.com/users";
// 	fetch(url).then((res)=>{
// 		console.log('First Then');
// 		return res.json();
// 	}).then((data)=>{
// 		console.log('Second then');
// 		console.log(data);
// 	})
// }

// function postData(){
	
// 	url = "https://dummy.restapiexample.com/api/v1/create";
// 	data = '{"name":"testdhd4hh4hh4hh4h4","salary":"123","age":"23"}'
// 	params = {
// 		method:"post",
// 		headers:{
// 			'Content-Type':'application/json'
// 		},
// 		body:data
// 	}
// 	fetch(url,params).then(res=>res.json())
// 	.then(data=>console.log(data)
// 	)
// }
// console.log('Before');
// getData()
// console.log('After');

// postData()


// function getData(){
// const options = {
//   method: 'GET',
//   url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
//   params: {s: 'daft_punk'},
//   headers: {
//     'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
//     'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// }
// getData();

// ef5b97190a75d420762a9d0eb252c460
// https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=ef5b97190a75d420762a9d0eb252c460





axios.get('https://api.openweathermap.org/data/2.5/weather?q=gujrat&appid=ef5b97190a75d420762a9d0eb252c460').then(function(res){
  console.log(res);
})
