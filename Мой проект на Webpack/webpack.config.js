const path = require('path');

module.exports = {
  entry: './src/index.js', // Входная точка
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для CSS файлов
        use: ['style-loader', 'css-loader'], // Загрузчики для обработки CSS
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Директория для сервера
    compress: true,
    port: 9000,
  },
};