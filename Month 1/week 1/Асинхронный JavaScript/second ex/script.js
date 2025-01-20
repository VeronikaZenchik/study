async function fetchRandomUser() {
  try {
    // 1. Делаем запрос к API
    const response = await fetch('https://randomuser.me/api/');

    // 2. Проверяем, что ответ успешный
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }

    // 3. Преобразуем ответ в JSON
    const data = await response.json();

    // 4. Извлекаем данные пользователя
    const user = data.results[0];
    const name = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const image = user.picture.large;

    // 5. Обновляем DOM
    const userImage = document.getElementById('user-image');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');

    if (!userImage || !userName || !userEmail) {
      throw new Error('Элементы DOM не найдены');
    }

    userImage.src = image;
    userName.textContent = name;
    userEmail.textContent = email;
  } catch (error) {
    // 6. Обрабатываем ошибку
    console.error('Произошла ошибка:', error.message);
    alert('Не удалось загрузить данные пользователя. Пожалуйста, попробуйте позже.');
  }
}

// 7. Добавляем обработчик события на кнопку
document.getElementById('fetch-user').addEventListener('click', fetchRandomUser);