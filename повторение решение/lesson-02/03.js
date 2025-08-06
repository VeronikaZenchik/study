/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 55 // тестовое значение, можно изменять
let grade

switch (true) {
  case (score >= 90 && score <= 100):
    grade = "A"
    break;
  case (score >= 80 && score <= 89):
    grade = "B"
    break;
  case (score >= 70 && 79 <= score):
    grade = "C"
    break;
  case (score >= 50 && 69 <= score):
    grade = "D"
    break;
  case (score >= 0 && 49 <= score):
    grade = "F"
    break;
}

console.log("Балл " + score);
console.log("Оценка " + grade);

//Здесь мы проверяем, какое из условий истинно (true)

//Когда  мы пишем switch(true), он будет искать case, который тоже даёт true