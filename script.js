let myLibrary = [];
const bookContainer = document.getElementById('book-container');
const testBook = new Book('testtitle', 'test author', 23, true);
addBookToLibrary(testBook);

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.hasRead = hasRead;
}

function createBook() {
    let userTitle = prompt("Enter the title of the book.");
    let userAuthor = prompt("Enter the author of the book.");
    let userPages = Number(prompt("Enter the page length of the book."));
    let userHasRead = prompt("Have you read this book? Either enter true or false, true").toLowerCase();

    const newBook = new Book(userTitle, userAuthor, userPages, userHasRead);
    addBookToLibrary(newBook);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(bookArray) {
    bookArray.forEach(book => {
        let div = document.createElement('div');
        div.classList.add("book");
        div.textContent = book.title;
        bookContainer.appendChild(div);
    });
}

