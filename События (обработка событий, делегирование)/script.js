const form = document.querySelector('.form')
const button = document.querySelector('.button')
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');


form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.querySelector('.name')
  const email = document.querySelector('.email')
  const password = document.querySelector('.password')


  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value

  let isValid = true; // проверка на валидацию для отправки формы

  if (nameValue === '') {
    nameError.textContent = 'Поле "Имя" не должно быть пустым!';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if (emailValue === ''  || !emailValue.includes('@')) {
    emailError.textContent = 'Поле "Email" должно содержать корректный email.';
    isValid = false;
} else {
  emailError.textContent = '';
}

  if (passwordValue.length < 8) {
    passwordError.textContent = 'Поле "Пароль" должно содержать не менее 8 символов.';
    isValid = false;
} else {
  passwordError.textContent = '';
}

if (isValid) {
  form.submit(); // Отправка формы, если все поля валидны
}

})