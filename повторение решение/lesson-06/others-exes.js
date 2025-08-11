// 1. Счетчик с колбэком
// Напишите функцию counter, которая принимает колбэк и число n, и вызывает колбэк n раз с текущим индексом в качестве аргумента.


const counter = (callback, n) =>{
for (let i = 0; i < n; i++) {
  callback(i)
  
}
}

const callbackCounter = (index)=>{
console.log(`Вызов ${index + 1}`)
}

(counter(callbackCounter, 3));



// 2. Фильтр строк
// Создайте функцию filterStrings, которая принимает массив строк и колбэк-фильтр, и возвращает новый массив строк, для которых колбэк возвращает true.


function filterStrings(arr, callback) {
let result = []
for (let i = 0; i < arr.length; i++) {
  if (callback(arr[i])) {
    result.push(arr[i])
  }
  
}
return result
}

const callbackFruits = (fruit) => {
  return fruit.length < 6
}


console.log(filterStrings((['apple', 'banana', 'cherry', 'date']), callbackFruits)); // ['apple', 'date']



// 4. Трансформатор чисел
// Создайте функцию transformNumbers, которая принимает массив чисел и колбэк-трансформатор, и возвращает новый массив с преобразованными значениями.


const transformNumbers = (numbers, callback) => {
  let itog = []
  for (let i = 0; i < numbers.length; i++) {
      itog.push(callback(numbers[i]))
  }
  return itog
}

const callbactTransformer = (num) => {
  return num * num
}

console.log(transformNumbers([1, 2, 3], callbactTransformer));



// 5. Условный исполнитель
// Напишите функцию executeIf, которая принимает условие (булево значение), колбэк и аргумент для колбэка. Функция должна выполнять колбэк только если условие истинно.


const executeIf= (condition, callback, arg) => {
  if (condition) {
    return callback(arg)
  }
  return ""
}

const callbackName = (name) => {
  console.log(`Hello, ${name}!`)
}

(executeIf(true, callbackName, "Anna"));



// 7. Фильтр по типу данных
// Напишите функцию filterByType, которая принимает массив разных типов данных и колбэк-проверку типа, и возвращает новый массив с элементами нужного типа.


function filterByType(arr, typeCheckCallback) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (typeCheckCallback(arr[i])) {
      res.push(arr[i])
    }
    
  }
  return res
}

const callbackMix = (item) => {
  return typeof item === "string"
}

console.log(filterByType([1, 'hello', true, {}, [], 42, null], callbackMix));