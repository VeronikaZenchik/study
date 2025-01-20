async function fetchUsers() {
  try {
     // 1. Выполняем запрос к API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

     // 2. Проверяем, что ответ успешный (статус 200-299)
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
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

            // Очищаем список перед добавлением новых данных (опционально)
            userList.innerHTML = '';

        // Добавляем каждого пользователя в список
        users.forEach((user) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<p>${user.name} (${user.email})</p>`;
          userList.appendChild(listItem);
        });

  } catch (error) {
    // Обрабатываем ошибку
    console.error(error);
  }
}

fetchUsers()