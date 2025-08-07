// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(fisrt, second, third) {
if (fisrt > second && fisrt > third) {
  return fisrt 
} else if (second > fisrt && second > third){
    return second 
} else {
  return third
}
}

console.log(findLargest(15, 5, 9));

