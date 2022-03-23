class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}

let books = [];
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const myBook = new Book(bookTitle.value, bookAuthor.value);
  if (bookTitle.value && bookAuthor.value) {
    books.push(myBook);
  }
  localStorage.setItem('bookDetail', JSON.stringify(books));
  bookTitle.value = '';
  bookAuthor.value = '';
  window.location.reload();
});

function renderBooks() {
  const newLine = document.querySelector('.bookLine');
  books = JSON.parse(localStorage.getItem('bookDetail')) || [];
  books.forEach((book, index) => {
    const render = ` <div class="books-view"> <p>${book.author} by ${book.title}</p> <button id='${index}' class='remove'>Remove</button> </div>`;
    newLine.innerHTML += render;
  });
}
renderBooks();
function remBook(index) {
  books = books.filter((bk, i) => index !== i);
  localStorage.setItem('bookDetail', JSON.stringify(books));
  window.location.reload();
}
const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach((button, index) => button.addEventListener('click', () => remBook(index)));
