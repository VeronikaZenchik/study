// 1. Создание объекта
// Создайте объект book со свойствами:

// title (строка)

// author (строка)

// year (число)

// метод getInfo(), возвращающий строку: "Название книги, Автор (Год)"

const book = {
  title: "Профайлер",
  author: "Лей Ми",
  yaer: 2023,
  getInfo(){
    console.log(`Название книги ${this.title}, автор: ${this.author}, год: ${this.yaer}`)
  }
}
book.getInfo()


const book2 = {
  title: "Синицы",
  author: "Говорун",
  yaer: 2023,
}




// 2. Калькулятор
// Создайте объект calculator с методами:

// add(a, b) - возвращает сумму

// subtract(a, b) - возвращает разность

// multiply(a, b) - возвращает произведение

// divide(a, b) - возвращает частное


const calculator = {
  add(a,b){
    return a + b
  },
  subtract(a, b){
    return a - b
  },
  multiply(a, b){
    return a * b
  },
  divide(a, b){
    return a / b
  }
}
console.log(calculator.divide(10, 5));


// 3. Подсчет свойств
// Напишите функцию countProperties(obj), которая принимает объект и возвращает количество его свойств.


const countProperties = (obj) => {
return Object.entries(obj).length
}

console.log(countProperties(book));


// 4. Объединение объектов
// Напишите функцию mergeObjects(obj1, obj2), которая возвращает новый объект, объединяющий свойства обоих объектов. Если есть одинаковые ключи, приоритет у obj2.

const mergeObjects = (obj1, obj2) => {
  return Object.assign({}, obj1, obj2)
}

console.log(mergeObjects(book, book2));


// 5. Поиск максимального значения
// Напишите функцию findMaxValue(obj), которая находит и возвращает максимальное числовое значение в объекте.

const findMaxValue = (obj) => {
let arr =  Object.values(obj)
let max = Math.max(...arr)
return max
}
const objMax = {
  first: 1,
  second: 2,
  third: 3
}
console.log(findMaxValue(objMax));


// 6. Фильтрация по типу----
// Напишите функцию filterByType(obj, type), которая возвращает новый объект, содержащий только свойства указанного типа (например, 'string', 'number').

function filterByType(obj, type) {
  const result = {};
  
  for (const key in obj) {
    if (typeof obj[key] === type) {
      result[key] = obj[key];
    }
  }
  
  return result;
}
const mixedObject = {
  name: "John",
  age: 30,
  isAdmin: true,
  address: {
    city: "New York",
    zip: 10001
  },
  hobbies: ["reading", "swimming"],
  score: null,
  sayHello: function() {
    return "Hello!";
  },
  birthDate: new Date(1990, 5, 15),
  salary: 1500.75
};
console.log(filterByType(mixedObject, "number"));



// 7. Трансформация объекта---
// Напишите функцию transformObject(obj, callback), которая применяет callback-функцию к каждому значению объекта и возвращает новый объект с теми же ключами, но преобразованными значениями.

const transformObject = (obj, callback) => {
  const result = {};
  for (const key in obj) {
    result[key] = callback(obj[key]);
  }
  return result;

return arr
}

const numbersObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

const callbackFanc = (x) => x * x
console.log(transformObject(numbersObj, callbackFanc));


// 8. Глубокое копирование
// Напишите функцию deepClone(obj), которая возвращает полную копию объекта (включая вложенные объекты).

const deepClone = (obj)=> {
return Object.assign(obj)
}
const originalObj = {
  name: "Alice",
  details: {
    age: 25,
    skills: ["JS", "React"],
    employment: {
      company: "TechCorp",
      position: "Developer"
    }
  },
  isActive: true
};

console.log(deepClone(originalObj));


// 9. Сравнение объектов
// Напишите функцию isEqual(obj1, obj2), которая возвращает true, если объекты имеют одинаковую структуру и значения.

function  isEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
      obj1 === null || obj2 === null) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
} 

const obj1 = {
  id: 1,
  name: "Product A",
  price: 100,
  details: {
    stock: 50,
    warehouse: "NY"
  }
};

const obj2 = {
  id: 1,
  name: "Product A",
  price: 100,
  details: {
    stock: 50,
    warehouse: "NY"
  }
};

console.log(isEqual(obj1, obj2));


