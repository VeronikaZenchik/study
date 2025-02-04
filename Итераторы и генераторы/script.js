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