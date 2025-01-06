document.querySelector('.check').addEventListener('click', () => {
  const guessedVal = +document.querySelector('.guess').value

  if(!guessedVal) {
    document.querySelector('.message').textContent = "No Number Was Entered!"
  }
})