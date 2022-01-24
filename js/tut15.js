// traversing the dom
console.log('15');
let cont = document.querySelector('.no')
cont = document.querySelector('.container');
console.log(cont.childNodes); // sab dikhaega
console.log(cont.children);// text comment ko nahi maanega
let nodeName = cont.childNodes[5].nodeName
let nodeType = cont.childNodes[0].nodeType
console.log(nodeName);
console.log(nodeType);

// node types
// 1. element
// 2. Attribute
// 3. Text Node
// 8. comment
// 9. document
// 10. docTYPE

// children ke chilfren bhi praapt karma hai agar to ye kro.. 









