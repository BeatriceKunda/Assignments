const books = require('./books');


// Display all books and their authors 

const booksLength = books.length;
console.log("Here is a list of all books and their authors")
for (let i = 0; i < booksLength; i++) {
    console.log(`....................................................................................\n`)

    console.log(`Book: ${books[i].title}`)
    console.log(`Author: ${books[i].author}\n`)
}

// Display all the books (show only book titles) published by `O'Reilly Media`.

console.log("\nThese were the books published by O'Reilly Media")
console.log(`....................................................................................\n`);

for (let i = 0; i < booksLength; i++) {
    if (books[i].publisher === "O'Reilly Media") {
        console.log(books[i].title);
    }
}


// Display all the books (show only book titles) which have more than 350 pages

console.log("\nBooks with more than 350 pages");
console.log(`....................................................................................\n`);
for (let i = 0; i < booksLength; i++) {
    if (books[i].pages > 350) {
        console.log(books[i].title);
    }
}
