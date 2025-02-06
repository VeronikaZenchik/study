// Практика - Деструктуризация и операторы spread/rest:
// 1. Напишите функцию, которая принимает объект и возвращает новый объект, где ключи и значения поменяны местами.

// Ожидаемый результат: { 1: 'a', 2: 'b', 3: 'c' }

function swapKeysAndValues(obj) {
  const swapped = {};
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          swapped[obj[key]] = key;
      }
  }
  return swapped;
}

// Пример использования
const obj = { a: 1, b: 2, c: 3 };
const swapped = swapKeysAndValues(obj);
console.log(swapped); 



// 2. Создайте массив, объединив два других массива с помощью spread

const arrayOne = [1, 2, 30]
const arrayTwo = [9,85,42]
const mainArray = [...arrayOne, ...arrayTwo]
console.log(mainArray);



// Практика:
// Создайте класс Animal с методом speak. Затем создайте класс Dog, который наследует Animal и переопределяет метод speak.


class Animal {
  constructor(name) {
    this.name =  name
  }
  speak(){
  console.log(`${this.name} издает звук`);
  }
  
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
  speak() {
    console.log(`${this.name} с породой: ${this.breed} мяукает`);
  }
}

const cat = new Cat ("Тимоша", "Британец")
cat.speak()


class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} с породой: ${this.breed} лает`);
  }
}

const dog = new Dog("Шарик", "Овчарка");
dog.speak();



// Создаем генератор, который перебирает ключи объекта


function* keyIterator(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    yield key;
  }
}

// Создаем объект
const catObj = {
  name: "Тимоша",
  breed: "Британец",
  age: 3
};

// Используем генератор
const generator = keyIterator(catObj);

// Перебираем ключи объекта
for (const key of generator) {
  console.log(key); 
}

