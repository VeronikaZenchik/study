// Шаг 1: Загрузка задач из LocalStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");
  const taskList = document.getElementById("task-list");

  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    tasks.forEach(task => {
      const listItem = document.createElement("li");
      listItem.textContent = task;
      taskList.appendChild(listItem);
    });
  }
});

// Шаг 2: Добавление задачи
document.getElementById("add-task").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const newTask = taskInput.value.trim();

  if (newTask) {
    const taskList = document.getElementById("task-list");

    // Добавляем задачу в DOM
    const listItem = document.createElement("li");
    listItem.textContent = newTask;
    taskList.appendChild(listItem);

    // Сохраняем задачу в LocalStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Очищаем поле ввода
    taskInput.value = "";
  }
});

// Шаг 3: Удаление задачи
document.getElementById("task-list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const taskText = event.target.textContent;
    event.target.remove();

    // Удаляем задачу из LocalStorage
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
});