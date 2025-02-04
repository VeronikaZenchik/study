// Задание 1: Создайте итератор
// Создайте объект range, который представляет диапазон чисел от start до end. Реализуйте для него итератор, чтобы можно было перебирать числа в этом диапазоне с помощью for...of.

const range = {
  start: 1,
  end: 5,
  
  [Symbol.iterator]() {
    let current = this.start;
    const last = this.end;
    
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let num of range) {
  console.log(num); // Вывод: 1, 2, 3, 4, 5
}

// Задание 2: Создайте генератор
// Напишите генератор randomNumberGenerator, который возвращает случайные числа в диапазоне от min до max. Генератор должен работать бесконечно.


function* randomNumberGenerator(min, max) {
  while (true) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const generator = randomNumberGenerator(1, 100); // Генератор случайных чисел от 1 до 100
for (let i = 0; i < 10; i++) {
  console.log(generator.next().value); // Выводит 10 случайных чисел
}


// Задание 3: Генератор последовательности
// Создайте генератор sequenceGenerator, который возвращает последовательность чисел, начиная с start, с шагом step. Генератор должен поддерживать бесконечную последовательность.


function* sequenceGenerator(start, step) {
  while (true) {
    yield start; // Возвращаем текущее значение start
    start += step; // Увеличиваем start на шаг
  }
}

const sequenceGen = sequenceGenerator(0, 2);

for (let i = 0; i < 6; i++) {
  console.log(sequenceGen.next().value);
}


// Задание 4: Генератор для массива
// Напишите генератор arrayGenerator, который принимает массив и возвращает его элементы по одному. Когда массив заканчивается, генератор должен начать сначала.


function* arrayGenerator(arr) {
  while (true) {
    for (let item of arr) {
      yield item; // Возвращаем текущий элемент массива
    }
  }
}

const arrGen = arrayGenerator([1, 2, 3]);

for (let i = 0; i < 10; i++) {
  console.log(arrGen.next().value); // Выводит элементы массива по одному, начиная сначала
}



// Создайте генератор, который будет генерировать последовательность квадратов чисел (1, 4, 9, 16 и т.д.).

function* generateFoutrh() {
  let a = 1
  while (true) {
      yield a * a;
      a++
  }
}

const fourth = generateFoutrh();

for (let i = 0; i < 10; i++) {
  console.log(fourth.next().value);
}


// Напишите функцию, которая принимает итератор и выводит первые 5 значений, используя метод next().

function* generateFive() {
  let a = 1
  while (a <= 5) {
    yield a; // Возвращаем текущее значение a
    a++;
  }
}

const five = generateFive();

for (let i = 0; i < 5; i++) {
  console.log(five.next().value);
}


// Попробуйте создать генератор, который будет возвращать случайные числа от 1 до 100. Выведите 10 случайных чисел, используя созданный генератор.


function* randomNumber(min, max) {
  while (true) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const generat = randomNumber(1, 100);
for (let i = 0; i < 10; i++) {
  console.log(generat.next().value); 
}


// Задача 1: Генератор Фибоначчи

// Создайте генератор, который будет генерировать последовательность чисел Фибоначчи. Первые два числа Фибоначчи — это 0 и 1, а каждое следующее число — это сумма двух предыдущих. Выведите первые 10 чисел Фибоначчи.
// Подсказка: Используйте yield для возврата текущего числа Фибоначчи и обновляйте значения для следующего числа.

function* fibonacciGenerator () {
  let a = 0, b = 1
  while(true){
    yield a
    [a, b] = [b, a +b]
      }
}
const fibonac = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
  console.log(fibonac.next().value); 
}


// Используется деструктуризация массива:
// a принимает значение b (предыдущее следующее число).
// b принимает значение a + b (сумма двух предыдущих чисел).



// Задача 2: Генератор для строк

// Создайте генератор, который принимает массив строк и возвращает их по одной. После того как все строки будут возвращены, генератор должен начать снова с первой строки. Выведите первые 8 строк из массива.
// Подсказка: Используйте цикл while и for для перебора элементов массива.

function* stringGenerator (arr) {
  while(true){
    for(let item of arr){
      yield item
    }
    }
}
const string = stringGenerator(['apple', 'banana', 'cherry']);
for (let i = 0; i < 8; i++) {
  console.log(string.next().value); 
}
