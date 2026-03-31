# 📚 My Library App

A simple web application for managing your personal library. You can add books, track if you've read them, toggle their read status, and remove them. Built with HTML, CSS, and JavaScript, using object-oriented programming concepts and prototypal inheritance.

## 🛠 Features
Add new books with title, author, pages, and read status.
Display books dynamically in responsive cards.
Toggle a book's read status directly from the card.
Remove books from your library.
Each book has a unique ID generated with crypto.randomUUID() to prevent conflicts.
Clean separation of data (book objects) and UI (DOM elements) for better maintainability.
## 📦 Project Structure
my-library/
│
├─ index.html       # Homepage
├─ books.html       # Library management page
├─ styles.css       # CSS styles
├─ script.js        # JavaScript logic for adding, removing, and displaying books
└─ README.md        # Project documentation
## 🖥 How It Works

### Book Constructor
Each book is created using a Book constructor:

function Book(title, author, pages, read) {
    this.ID = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
## Adding Books
The addBookToLibrary function takes user input, creates a book object, and adds it to the myLibrary array.
Displaying Books
displayBooks() renders all books in a responsive card layout. Each card includes:
Title, author, pages, read status
Toggle Read button
Remove button

## Interactivity

### Toggle read status with a prototype function:
Book.prototype.toggleRead = function() {
    this.read = !this.read;
    displayBooks();
}
### Remove a book by its unique ID:
function removeBook(id) {
    const index = myLibrary.findIndex(book => book.ID === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
}
##🎨 Styling
Modern, clean card-based layout for books.
Responsive grid for different screen sizes.
Color-coded buttons:
Yellow for toggling read status
Red for removing books
Form styling with rounded corners and shadow for emphasis.
##⚡ Usage
Open books.html in a web browser.
Fill out the "Add a new book" form with title, author, pages, and read status.
Click Add Book to add it to your library.
Use the Toggle Read button to mark a book as read or unread.
Use the Remove button to delete a book from the library.
## 📚 Notes
This project does not use persistent storage, so all data is lost on page reload.
Each book has a unique ID, which is used to link UI elements to book objects.
JavaScript follows object-oriented programming principles, separating data management from UI rendering.
## 🧩 Future Improvements
Add localStorage support to persist books between sessions.
Add search and filter functionality by title, author, or read status.
Improve UI with icons and animations for read/unread status.
Add pagination or infinite scroll for large libraries.


This README gives a professional overview, explains how the code works, and also leaves room for future features.
