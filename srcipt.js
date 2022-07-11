let myLibrary = [];

function Book(title, author, pages, whetherRead) {
    this.title = title
    this.author = author
    this.pages = parseInt(pages)
    this.whetherRead = whetherRead ? 'read already' : 'not yet read';
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${whetherRead}`;
    }
}

function addBookToLibrary() {
    let abc = prompt();
    let inputArray = abc.split(" ");
    let book = new Book(inputArray[0], inputArray[1], inputArray[2], inputArray[3]);
    myLibrary.push(book);
}

function displayBooks() {
    const table = document.querySelector('table');

    for (let book of myLibrary) {
        const row = document.createElement('tr');
        for (let prop in book) {
            const element = document.createElement('td');
            element.textContent = book.prop;
            row.appendChild(element);
        }
        table.appendChild(row);
    }
}

displayBooks();
