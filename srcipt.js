let myLibrary = [];

function Book(title, author, pages, whetherRead) {
    this.title = title
    this.author = author
    this.pages = parseInt(pages)
    this.whetherRead = whetherRead ? 'read already' : 'not read yet';
    this.info = () => `${title} by ${author}, ${pages} pages, ${whetherRead}`
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
            if (typeof book[prop]  === 'function') {
                continue;
            }
            const tableCell = document.createElement('td');
            tableCell.textContent = book[prop];
            if (prop === 'whetherRead') {
                tableCell.classList.add(`book_${myLibrary.indexOf(book)}`);
            }
            
            row.appendChild(tableCell);
        }
        row.dataset.bookNumber = myLibrary.indexOf(book);
        row.dataset.readStatus = book.whetherRead;

        const addBookButton = document.createElement('button');
        addBookButton.classList.add('remove-book');
        row.appendChild(addBookButton);

        const readStatusButton = document.createElement('button');
        readStatusButton.classList.add('change-status')
        row.appendChild(readStatusButton);
        
        table.appendChild(row);
    }
}

function getUserInput() {
    const inputButton = document.querySelector('.input-button');
    inputButton.addEventListener('click', () => {
        const inputForm = document.querySelector('form');
        if (inputForm.style.display === 'none') {
            inputForm.style.display = 'block';
        }
        else {
            inputForm.style.display = 'none';
        }
    });
    const removeButtonList = document.querySelectorAll('.remove-book');
    removeButtonList.forEach(removeButton => {
        removeButton.addEventListener('click', () => {
            const bookNumber = removeButton.parentElement.dataset.bookNumber;
            console.log(parseInt(bookNumber));
            myLibrary.splice(parseInt(bookNumber), 1);
            removeButton.parentElement.remove();
    });
    
});
}


trialBook = new Book('abd', 'ahf', 80, false);
trialBook2 = new Book('afuei', 'hoefh', 90, true);

myLibrary.push(trialBook, trialBook2);

displayBooks();
getUserInput();
const statusButtonList = document.querySelectorAll('.change-status');
    statusButtonList.forEach(statusButton => {
        statusButton.addEventListener('click', () => {
            console.log(statusButton);
            const readStatus = statusButton.parentElement.dataset.readStatus;
            const bookNumber = statusButton.parentElement.dataset.bookNumber;
            const book = myLibrary[parseInt(bookNumber)];
            const readStatusCell = document.querySelector(`.book_${myLibrary.indexOf(book)}`);
            const notRead = 'not read yet';
            const read = 'read already';

            if (readStatus === 'read already') {
                statusButton.parentElement.dataset.readStatus = notRead;
                readStatusCell.textContent = notRead;
                book.whetherRead = notRead;
            }
            else {
                statusButton.parentElement.dataset.readStatus = read;
                readStatusCell.textContent = read;
                book.whetherRead = read;
            }
        });
    });
