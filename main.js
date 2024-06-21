const response = await fetch('./initial_books.json');
const books = await response.json();
const myLibrary = books;
//
const submit = document.querySelector("#submit");
//
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#showDialog");
const cancelButton = document.querySelector("#cancel");

function Book(author, title, pagesNumber, isRead) {
  this.author = author;
  this.title = title;
  this.pagesNumber = pagesNumber;
  this.isRead = isRead;
}

function addBookToLibrary(author,title,pagesNumber,isRead) {
  myLibrary.push(new Book(author,title,pagesNumber,isRead));
}

submit.onclick = () => {
  const author = document.querySelector("#author").value
  const title = document.querySelector("#title").value
  const pagesNumber = document.querySelector("#pages-number").value
  const isRead = document.querySelector("#is-read").value

  addBookToLibrary(author,title,pagesNumber,isRead);
  showBooks([myLibrary[myLibrary.length - 1]]);
  dialog.close();
};

function showBooks(library) {
  const lib = document.querySelector("#library");
  library.forEach(book => {
    // console.log(book);
    let content = document.createElement("div");
    let val = document.createAttribute("class");
    val.value = `${book.title}`;
    content.setAttributeNode(val);

    let removeBook = document.createElement("button");
    let attrRemoveBook = document.createAttribute("class");
    attrRemoveBook.value = `removeButton-${book.title}`;
    removeBook.setAttributeNode(attrRemoveBook);
    removeBook.innerHTML = "Delete";

    content.innerText = `
    Title: ${book.title}
    Author: ${book.author}
    Pages:${book.pagesNumber}
    Read: ${book.isRead}
    `
    lib.appendChild(content);
    content.appendChild(removeBook);
  });
}

showButton.addEventListener("click", () => {
  dialog.showModal();
})

cancelButton.addEventListener("click", () => dialog.close());

showBooks(myLibrary);