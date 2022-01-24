// Strings in JavaScript
console.log("tut6 -> String");
const name = "Anubhav";
const greeting = "Gm";
// console.log(greeting + " " +name);

let html = "<h1>Not a good String</h1>" + "hello"
console.log(html);
html = html.concat("Anubhav","Raj") 
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[1])
// console.log(html.indexOf('good'));
// console.log(html.indexOf('goodsjhwu'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(6));
// console.log(html.endsWith('str2'));

// console.log(html.includes('good'));
// console.log(html.substring(1,6));
// console.log(html.slice(-4));
// console.table(html.split(' '));
// console.log(html.replace('this','it'));

let fruit1 = 'Orange'
let fruit2 = 'Apple'
let myHtml = `Hello ${name}

<h1>This is heading</h1>`
console.log(myHtml);
console.log(document.body.innerHTML = myHtml);