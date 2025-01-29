class User {
  constructor(name, surname, age, email) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
  }
  
  // Метод для проверки, является ли пользователь взрослым
  isAdult() {
    return this.age >= 18;
  }

  // Метод для получения информации о пользователе
  getInfo() {
    const adultStatus = this.isAdult() ? "взрослый" : "не взрослый";
    return `Имя: ${this.name}, Фамилия: ${this.surname}, Возраст: ${this.age}, Email: ${this.email}, Статус: ${adultStatus}`;
  }

  // Метод для обновления email
  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

// Пример использования
const user1 = new User("Иван", "Иванов", 30, "ivan@example.com");
console.log(user1.getInfo()); // Имя: Иван, Фамилия: Иванов, Возраст: 30, Email: ivan@example.com, Статус: взрослый

const user2 = new User("Маша", "Петрова", 15, "masha@example.com");
console.log(user2.getInfo()); // Имя: Маша, Фамилия: Петрова, Возраст: 15, Email: masha@example.com, Статус: не взрослый

// Обновление email у первого пользователя
user1.updateEmail("ivan.new@example.com");
console.log(user1.getInfo()); // Имя: Иван, Фамилия: Иванов, Возраст: 30, Email: ivan.new@example.com, Статус: взрослый