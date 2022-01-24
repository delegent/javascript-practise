console.log("tut12");
let a = document;
a = document.all;
// a = document.body;
// a = document.forms;
// we can access the forms with the indexes
// Array.from(a).forEach(function(e){
// 	console.log(e);
// })
a = document.links[0].href;
a = document.images[0].src;


console.log(a);


