const form = document.querySelector('.form')

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordErrorRepeat = document.getElementById('password-error-repeat');



const button = document.querySelector('.button')


form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.querySelector('.name')
  const email = document.querySelector('.email')
  const password = document.querySelector('.password')
  const passwordRepeat = document.querySelector('.password-repeat')

  let isValid = true; 

  const nameValue = name.value.trim()
  const emailValue = email.value.trim();
  const passwordValue = password.value
  const passwordRepeatValue = passwordRepeat.value

  if(nameValue === '') {
    nameError.textContent = 'Поле "Имя" не должно быть пустым!';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if(emailValue === '' ||  !emailValue.includes('@')) {
    emailError.textContent = 'Поле "Email" должно содержать корректный email.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }


  if(passwordValue === '' ||  passwordValue.length < 8) {
    passwordError.textContent = 'Поле "Пароль" должно содержать не менее 8 символов.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }


  if(passwordRepeatValue === '' ||  passwordRepeatValue !== passwordValue) {
    passwordErrorRepeat.textContent = 'Поле "Подтверждение пароля" должно совпадать с полем "Парооль".';
    isValid = false;
  } else {
    passwordErrorRepeat.textContent = '';
  }


  if (isValid) {
    form.submit();
    alert("Все данные успешно отправлены!")
  } 
})