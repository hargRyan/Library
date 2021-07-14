let myLibrary = [];
let currentIDs = [];
let bookID = 0;
const bookContainer = document.getElementById('book-container');
const testBook = new Book('testtitle', 'test author', 23, true);
const testBook2 = new Book('dsf', 'tefst aufdsfsfdsfthor', 55, true);
const newBook = document.getElementById('new-book');


newBook.addEventListener('click', createBook );
addBookToLibrary(testBook);
addBookToLibrary(testBook2);
displayBooks(myLibrary);

/*
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.hasRead = hasRead;

    this.id = bookID;
    bookID++;
}
*/

class Book {
    constructor(title, author, pages, hasRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;

        this.id = bookID;
        bookID++;
    }

    setReadStatus() {
        if (this.hasRead) {
            this.hasRead = false;
        } else {
            this.hasRead = true;
        }
    }

    get readStatus() {
        return this.hasRead;
    }
}

/*
Book.prototype.setReadStatus = function() {
    if (this.hasRead) {
        this.hasRead = false;
    } else {
        this.hasRead = true;
    }
}

Book.prototype.getReadStatus = function() {
    return this.hasRead;
}
*/

function createBook() {
    let userTitle = prompt("Enter the title of the book.");
    let userAuthor = prompt("Enter the author of the book.");
    let userPages = Number(prompt("Enter the page length of the book."));
    let userHasRead = prompt("Have you read this book? Either enter true or false, true").toLowerCase();

    const newBook = new Book(userTitle, userAuthor, userPages, userHasRead);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function inLibrary () {
    let currentLibrary = document.querySelectorAll('.book'); //gets nodelist of .book
    
    currentLibrary.forEach(book => {
        if (book.dataset.id in currentIDs) return;
        currentIDs.push(book.dataset.id); 
        
    });
}

function displayBooks(bookArray) {

    inLibrary();

    bookArray.forEach(book => {

        if(book.id in currentIDs) return;

        let div = document.createElement('div');
        let title = document.createElement('h3');
        let author = document.createElement('h3');
        let pages = document.createElement('h3');
        let removeBook = document.createElement('button');
        let read = document.createElement('button');
        
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        removeBook.textContent = 'Remove from library';
        read.textContent = book.hasRead;
        
        removeBook.addEventListener('click', removeBookFromLibrary);
        read.addEventListener('click', setRead);

        div.classList.add('book');
        div.setAttribute('data-id', String(book.id));
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(removeBook);
        div.appendChild(read);

        bookContainer.appendChild(div);
    });
}

function removeBookFromLibrary(e) {
    
    let myEvent = e;
    let div = e.target.parentElement;
    let bookID = Number(div.dataset.id);
    if (myLibrary[bookID]) delete myLibrary[bookID];
    div.remove();
}

function setRead(e) {
    let myEvent = e;
    let div = e.target.parentElement;
    let bookID = Number(div.dataset.id);
    myLibrary[bookID].setReadStatus();
    e.target.textContent = myLibrary[bookID].getReadStatus();
}


console.log('tacos');