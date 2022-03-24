let books = [];
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('#add');

class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }

    addBook() {
        const myBook = new Book(this.value, this.value);
        books.push(myBook);
        localStorage.setItem('bookDetail', JSON.stringify(books));
    }

    static remBook(index) {
        books = books.filter((bk, i) => index !== i);
        localStorage.setItem('bookDetail', JSON.stringify(books));
    }
}

function renderBooks() {
    const newLine = document.querySelector('.bookLine');
    newLine.innerHTML = '';
    books = JSON.parse(localStorage.getItem('bookDetail')) || [];
    books.forEach((book, index) => {
        const render = ` <div class="books-view"> <p>${book.author} by ${book.title}</p> <button id='${index}' class='remove'>Remove</button> </div>`;
        newLine.innerHTML += render;
    });

    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button, index) => button.addEventListener('click', () => Book.remBook(index)));
}
renderBooks();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const myBook = new Book(bookTitle.value, bookAuthor.value);
    myBook.addBook();
    bookTitle.value = '';
    bookAuthor.value = '';
    renderBooks();
});
