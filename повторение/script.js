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



// Деструктуризация и spread/rest:
// Напишите функцию, которая принимает массив и возвращает новый массив, где первый и последний элементы поменяны местами

function takeMe(array) {
  if (array.length <= 1) {
    return array;
  }

  // Деструктурируем первый и последний элементы массива
  const [first, ...middle] = array;
  const last = array[array.length - 1];

  // Возвращаем новый массив с поменянными местами первым и последним элементами
  return [last, ...middle, first];
}

const originalArray = [1, 2, 3, 4, 5];
const swappedArray = swapFirstAndLast(originalArray);
console.log(swappedArray);



// Классы:
// Создайте класс Car с методами start и stop. Затем создайте класс ElectricCar, который наследует Car и добавляет метод charge.


class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.isRunning = false;
  }
  start() {
    this.isRunning = true;
    console.log(`${this.brand} ${this.model} запущен.`);
}

stop() {
    this.isRunning = false;
    console.log(`${this.brand} ${this.model} остановлен.`);
}
  
}

class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model)
    this.batteryCapacity = batteryCapacity; // Вместимость батареи
  }
  charge() {
    console.log(`${this.brand} ${this.model} заряжается. Вместимость батареи: ${this.batteryCapacity} кВтч.`);
  }
}


// Пример использования
const myCar = new Car('Toyota', 'Camry');
myCar.start(); // Вывод: Toyota Camry запущен.
myCar.stop();  // Вывод: Toyota Camry остановлен.

const myElectricCar = new ElectricCar('Tesla', 'Model S', 100);
myElectricCar.start(); // Вывод: Tesla Model S запущен.
myElectricCar.charge(); // Вывод: Tesla Model S заряжается. Вместимость батареи: 100 кВтч.
myElectricCar.stop();  // Вывод: Tesla Model S остановлен.


