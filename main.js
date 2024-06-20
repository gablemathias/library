const response = await fetch('./initial_books.json');
const books = await response.json();
const myLibrary = books;

function Book(author, title, pagesNumber, isRead) {
  this.author = author;
  this.title = title;
  this.pagesNumber = pagesNumber;
  this.isRead = isRead;
}

function addBookToLibrary(author,title,pagesNumber,isRead) {
  myLibrary.push(new Book(author,title,pagesNumber,isRead));
}
const submit = document.querySelector("#submit");

submit.onclick = () => {
  const author = document.querySelector("#author").value
  const title = document.querySelector("#title").value
  const pagesNumber = document.querySelector("#pages-number").value
  const isRead = document.querySelector("#is-read").value

  addBookToLibrary(author,title,pagesNumber,isRead);
  showBooks([myLibrary[myLibrary.length - 1]]);
};

function showBooks(library) {
  const lib = document.querySelector("#library");
  library.forEach(book => {
    // console.log(book);
    let content = document.createElement("div");
    content.innerText = `
    Title: ${book.title}
    Author: ${book.author}
    Pages:${book.pagesNumber}
    Read: ${book.isRead}
    `
    lib.appendChild(content);
  });
}

showBooks(myLibrary);