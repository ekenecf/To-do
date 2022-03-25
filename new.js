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
    const myBook = new Book(this.author, this.title);
    books.push(myBook);
    localStorage.setItem('bookDetail', JSON.stringify(books));
  }

  static remBook(index) {
    books = books.filter((bk, i) => index !== i);
    localStorage.setItem('bookDetail', JSON.stringify(books));
    window.location.reload();
  }
}

function renderBooks() {
  const newLine = document.querySelector('.bookLine');
  newLine.innerHTML = '';
  books = JSON.parse(localStorage.getItem('bookDetail')) || [];
  books.forEach((book, index) => {
    const render = ` <div class="books-view"> <p>${book.author} by ${book.title}</p> <button id='${index}' class='remove'>Remove</button></div>`;
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

const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const displayBooks = document.querySelector('.display-books');
const bookContainer = document.querySelector('#book-list-container');
const contactInfo = document.querySelector('#contact-info');
const bookContact = document.querySelector('.bkcontact');

function showBooks() {
  displayBooks.classList.add('show');
  bookContainer.classList.add('view');
  bookContact.classList.remove('van');
}
list.addEventListener('click', showBooks);

function viewBook() {
  bookContainer.classList.remove('view');
  displayBooks.classList.remove('show');
  bookContact.classList.remove('van');
}
addNew.addEventListener('click', viewBook);

function ctInfo() {
  bookContact.classList.add('van');
  displayBooks.classList.remove('show');
  bookContainer.classList.add('view');
}
contactInfo.addEventListener('click', ctInfo);

const dateContainer = document.querySelector('.date');
dateContainer.innerHTML = new Date();