class User {
  constructor(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
  }
  
  greet() {
    return `Имя: ${this.name}, Фамилия: ${this.surname}, Возраст: ${this.age}`
  }
}


class Admin extends User {
    constructor(name, surname, age, role) {
      super(name, surname, age);
      this.role = role;
    }
    showRole() {
      return `Роль: ${this.role}`
    }
}


// Примеры использования:

const user = new User("Иван", "Иванов", 30);
console.log(user.greet());   // Имя: Иван, Фамилия: Иванов, Возраст: 30

const admin = new Admin("Петр", "Петров", 40, "Администратор");
console.log(admin.greet());   // Имя: Петр, Фамилия: Петров, Возраст: 40
console.log(admin.showRole()); // Роль: Администратор