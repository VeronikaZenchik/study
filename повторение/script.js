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



