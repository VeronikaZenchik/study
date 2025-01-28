// api.js

// Функция для получения данных с API
export async function fetchData(url) {
  try {
      const response = await fetch(url); // Выполняем запрос
      if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
      }
      return await response.json(); // Возвращаем данные в формате JSON
  } catch (error) {
      console.error("Произошла ошибка:", error);
      return null; // В случае ошибки возвращаем null
  }
}