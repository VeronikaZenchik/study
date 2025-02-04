// main.js

// Импортируем функции из других модулей
import { fetchData } from './api.js';
import { formatData } from './utils.js';

// Основная функция
async function main() {
    const url = 'https://jsonplaceholder.typicode.com/users'; // Пример API
    const data = await fetchData(url); // Получаем данные с API

    if (data) {
        // Форматируем данные
        const formattedData = formatData(data.map(user => user.name)); // Извлекаем имена пользователей
        console.log("Форматированные данные:", formattedData);
    } else {
        console.log("Не удалось загрузить данные.");
    }
}

// Вызываем основную функцию
main();