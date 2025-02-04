// SPREAD

const object = {
  user: "Alice",
  age: 20,
  city: "Grodno"
}


function takeObject (obj) {
  return {...obj}
}
console.log(object);


//REST

function sumAll (...numbers) {
  let resulr = 0
  for (let i = 0; i < numbers.length; i++) {
    resulr += numbers[i]
    
  }
  return resulr
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(1));
console.log(sumAll(11, 29, 3));


// Деструктуризация 

// Деструктуризация объекта

const user = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
  hobbies: ["reading", "traveling", "coding"],
}

const {name, age, city} = user
const [first] = user.hobbies
console.log(name, age, city);
console.log(first);


// Деструктуризация вложенного объекта

const book = {
  title: "JavaScript: The Good Parts",
  author: {
    firstName: "Douglas",
    lastName: "Crockford"
  },
  year: 2008
};

const {title, year, author} = book
const {firstName, lastName} = author

console.log(title, year, author);
console.log(firstName, lastName);


// Деструктуризация массива

const point = [10, 20, 30];
const [x, y, z] = point


// Деструктуризация в параметрах функции

const userFun = {
  name: "Bob",
  age: 30,
  city: "New York"
};

function printUserInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printUserInfo(userFun);



// Деструктуризация с rest

const numbers = [1, 2, 3, 4, 5];
const [firstNum, ...rest] = numbers


// Деструктуризация с переименованием

const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022
};

const {brand: carBrand, model: carModel} = car
console.log(carBrand, carModel);


// Деструктуризация с значениями по умолчанию

const settings = {
  theme: "dark",
  fontSize: 14
};

const { theme, fontSize, language = "en" } = settings;
console.log(theme, fontSize, language);


// Деструктуризация в циклах

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

for (const { name, age } of users) {
  console.log(`Name: ${name}, Age: ${age}`);
}


// Деструктуризация в функциях возврата

function getUser() {
  return {
    name: "Alice",
    age: 25,
    city: "Wonderland"
  };
}

const { nameF, ageF } = getUser();

console.log(nameF, ageF);


// Деструктуризация вложенных массивов

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const [ [firstA], [, , third] ] = matrix;

console.log(firstA, third); 
