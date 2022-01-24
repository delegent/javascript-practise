// console.log('24');

// let person = {
// 	name:"Anubhav",
// 	age:18,
// 	gender:"male"
// }
// console.log(person);


// library class
class Library{
	constructor(username){
		this.user = username;
		this.myBooks = [];
	}
	static bookList = ['Python','Javascript','Go','JAVA','C'];

	getBookList(){
		console.log(Library.bookList);
	}
	issueBook(bookName){
		console.log(`Thank you for choosing... you are issued with ${bookName} Book.`);
		this.myBooks.push(bookName)

	}
	getMyBooks(){
		console.log(this.myBooks);
	}
	returnBook(bookName){
		let index = this.myBooks.indexOf(bookName);
		this.myBooks.splice(index,1);
		console.log('You are unissued with the book! Thanks');
	}
	
}
user = new Library("Anubhav");
user.getBookList();
user.getMyBooks();
user.issueBook('Python');
user.getMyBooks();
user.issueBook('Javascript');
user.getMyBooks();
user.returnBook('Javascript');
user.getMyBooks();






