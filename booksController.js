const books = require('./books');

const booksLength = books.length;
console.log("Here is a list of all books and their authors")
for (let i = 0; i < booksLength; i++) {
    console.log(`....................................................................................\n`)

    console.log(`Book: ${books[i].title}`)
    console.log(`Author: ${books[i].author}\n`)
}