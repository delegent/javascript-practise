console.log('16');
// let element = document.createElement('a')
// element.className = "hello";
// element.id = "anchor";
// // element.innerText = "Hey Bro";
// let text = document.createTextNode('Hey Brooooooo');
// element.appendChild(text)
// element.setAttribute('href','#');
let div = document.querySelector('#insert');
// div.appendChild(element);
// console.log(element);
// let elem = document.createElement('h3');
// let txt = document.createTextNode('Heading 3')
// elem.appendChild(txt);
// elem.className = "bro"
// div.replaceWith(elem);





// let cont = document.getElementById('cont')
// cont.replaceChild(elem,'<h1>Hello</h1>')


let head = document.createElement('h1')
let headNodeText = document.createTextNode('Tis is the heading');
head.appendChild(headNodeText)
div.appendChild(head)













