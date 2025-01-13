const buttonChange = document.querySelector('#button')
const textChange = document.querySelector('#text')

buttonChange.addEventListener('click', function() {
  textChange.textContent = "You can do this!"
  textChange.style.backgroundColor = "grey"
})