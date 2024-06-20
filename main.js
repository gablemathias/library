const myLibrary = [];

function Book(author, title, pagesNumber, isRead) {
  this.author = author;
  this.title = title;
  this.pagesNumber = pagesNumber;
  this.isRead = isRead;
}

function addBookToLibrary(author,title,pagesNumber,isRead) {
  myLibrary.push(author,title,pagesNumber,isRead);
}
const submit = document.querySelector("#submit");

submit.onclick = () => {
  const author = document.querySelector("#author").value
  const title = document.querySelector("#title").value
  const pagesNumber = document.querySelector("#pages-number").value
  const isRead = document.querySelector("#is-read").value
  alert(`Hello ${author}, nice to see you!`);

  addBookToLibrary(author,title,pagesNumber,isRead);

  alert(myLibrary);
};