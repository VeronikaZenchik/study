let book1 = {
title: "Icebreaker",
author: "Colin Smith",
year: 2019,
genre: "romantic",
getInfo(){
  console.log(`"Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}, Жанр: ${this.genre}`);
}
}

let book2 = {
title: "Bloom",
author: "Veronika Ha",
year: 2005,
genre: "detective",
getInfo(){
  console.log(`"Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}, Жанр: ${this.genre}`);
}
}

let book3 = {
title: "Candle",
author: "Max Finn",
year: 2024,
genre: "horror",
getInfo(){
  console.log(`"Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}, Жанр: ${this.genre}`);
}
}

let library = {
  books: [],

  addBook(book){
    this.books.push(book);
  },

  findBooksByAuthor(author){
    return this.books.filter(book => book.author === author);
  },

  findBooksByGenre(genre){
    return this.books.filter(book => book.genre === genre)
  },

  getAllBooks(){
    return this.books
  }
}

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


// Поиск книг по автору
let orwellBooks = library.findBooksByAuthor("Max Finn");
console.log(orwellBooks);

