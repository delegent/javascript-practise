// local and session storage

console.log('20');
let arr = [1,2,3,4,5];
window.localStorage.setItem('Name','Anubhav')
// settig the item
window.localStorage.setItem('Name2','Srivastava')
console.log(typeof(window.localStorage));
// retrieveing an item
let name = localStorage.getItem('Name')
console.log(name);
// localStorage.clear(); clears the total local storage

// clearing particular key
// localStorage.removeItem('Name')
localStorage.setItem('Numbers',JSON.stringify(arr))
let type = JSON.parse((localStorage.getItem(`Numbers`)))
console.log(type); // the problem is t

