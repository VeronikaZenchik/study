async function fetchUsers() {
  try {
    // 1. Выполняем запрос к несуществующему URL (ошибка 404)
    const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');

    // 2. Проверяем, что ответ успешный (статус 200-299)
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных: ' + response.status);
    }

    // 3. Преобразуем ответ в JSON
    const users = await response.json();

    // 4. Выводим данные в консоль
    console.log(users);

    // 5. Отображаем данные на странице
    const userList = document.getElementById('user-list');

    // Проверяем, существует ли элемент user-list
    if (!userList) {
      throw new Error('Элемент user-list не найден в DOM');
    }

    // Очищаем список перед добавлением новых данных
    userList.innerHTML = '';

    // Добавляем каждого пользователя в список
    users.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<p>${user.name} (${user.email})</p>`;
      userList.appendChild(listItem);
    });
  } catch (error) {
    // Обрабатываем ошибку
    console.error('Произошла ошибка:', error.message);
  }
}

// Вызываем функцию
fetchUsers();





// Что происходит в этом коде:
// Запрос к несуществующему URL:
// Мы пытаемся получить данные по адресу https://jsonplaceholder.typicode.com/nonexistent, который не существует.
// Сервер вернёт статус 404 Not Found.

// Проверка response.ok:
// Поскольку ответ не успешный (статус 404), срабатывает условие if (!response.ok).
// Мы выбрасываем ошибку с сообщением: Ошибка при загрузке данных: 404.

// Блок catch:
// Ошибка перехватывается в блоке catch.
// Мы выводим сообщение об ошибке в консоль с помощью console.error.