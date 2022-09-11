# React App with OpenLibrary API

A responsive single page frontend application to search for books data from  [OpenLibrary Book API](https://openlibrary.org/dev/docs/api/books)


**This is a simple App to showcase the usage of:**

- React
- Axios 
- react-dom
- react-router-dom
- react-scripts
- web-vitals

### Styling

- Basic responsive design

### Functionality

- Contain a search box where the user can input a book title, in full or partially.
- Display a scrollable *grid* of the first 100 books, with the book cover thumbnail, book title and author.
- The book browser layout is responsive, fully usable in both in desktop and mobile.
- When the user clicks on a thumbnail, the application opens the full-sized cover image in a modal. The user then are able to return to the grid.
- Pagination of results showing either 10, 20, 50 or 100 entries per page, to be chosen by the user.
- A switch that allows the user to toggle between the *grid view* and a detailed *list view*. The list should then display book cover thumbnail, book title, author, first publication year, ISBN (first value in the array).

## Installation

1.  Install Dependencies

    * [Node.js (version 16.x is recommended)](https://nodejs.org/en/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```
