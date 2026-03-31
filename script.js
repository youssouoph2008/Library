const myLibrary = []

function Book(title, author, pages, read) {
    this.ID = crypto.randomUUID();
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read // true or false
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Clear previous content
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h2');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(pages);

        const readStatus = document.createElement('p');
        readStatus.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        bookDiv.appendChild(readStatus);

        const toggleReadButton = document.createElement('button'); // Create toggle read button
        toggleReadButton.textContent = 'Toggle Read';
        toggleReadButton.classList.add('toggle-read-button');
        toggleReadButton.addEventListener('click', function() {
            book.toggleRead();
        });
        bookDiv.appendChild(toggleReadButton);

        const removeButton = document.createElement('button');  // Create remove button
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            removeBook(book.ID);
        });
        bookDiv.appendChild(removeButton);

        container.appendChild(bookDiv);
    });
}

document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    this.reset(); // Clear the form
} );


function removeBook(id) {
    const index = myLibrary.findIndex(book => book.ID === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
    displayBooks();
}