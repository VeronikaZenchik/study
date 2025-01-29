class Book {
  constructor(title, author, year, isAvailable) {
    this.title = title;        
    this.author = author;       
    this.year = year;          
    this.isAvailable = isAvailable;
  }
}


class Library {
  constructor(name) {
    this.name = name
    this.books = []
  }

    // Метод для добавления книги
    addBook(book) {
      this.books.push(book);    // Добавляем книгу в массив
    }

    
      // Метод для удаления книги
  removeBook(bookTitle) {
    this.books = this.books.filter(book => book.title !== bookTitle); // Фильтруем массив, исключая книгу с указанным заголовком
  }

    // Метод для получения списка всех книг
    listBooks() {
      return this.books.map(book => `Книга: ${book.title}, Автор: ${book.author}, Год: ${book.year}, Доступна: ${book.isAvailable}`).join('\n');
      // Возвращает строку с информацией о каждой книге
    }

    // Метод для поиска книги
  findBook(bookTitle) {
    const book = this.books.find(book => book.title === bookTitle); // Найти книгу по заголовку
    if (book) {
      return `Книга: ${book.title}, Автор: ${book.author}, Год: ${book.year}, Доступна: ${book.isAvailable}`; // Возвращаем информацию о книге
    }
    return 'Книга не найдена'; // Если книга не найдена
  }

   // Метод для обновления доступности книги
    updateBookAvailability(bookTitle, isAvailable) {
    const book = this.books.find(b => b.title === bookTitle); // Находим книгу
    if (book) {
      book.isAvailable = isAvailable; // Обновляем доступность
    } else {
      console.log('Книга не найдена'); // Сообщение, если книга не найдена
    }
  }
}

// Создаем библиотеку
const library = new Library("Городская библиотека");

// Создаем книги
const book1 = new Book("1984", "Джордж Оруэлл", 1949, true);
const book2 = new Book("Война и мир", "Лев Толстой", 1869, false);

// Добавляем книги в библиотеку
library.addBook(book1);
library.addBook(book2);

// Список всех книг
console.log(library.listBooks());
// Вывод:
// Книга: 1984, Автор: Джордж Оруэлл, Год: 1949, Доступна: true
// Книга: Война и мир, Автор: Лев Толстой, Год: 1869, Доступна: false

// Обновляем доступность книги "1984"
library.updateBookAvailability("1984", false);
console.log(library.findBook("1984"));
// Вывод:
// Книга: 1984, Автор: Джордж Оруэлл, Год: 1949, Доступна: false

// Удаляем книгу "Война и мир"
library.removeBook("Война и мир");
console.log(library.listBooks());
// Вывод:
// Книга: 1984, Автор: Джордж Оруэлл, Год: 1949, Доступна: false