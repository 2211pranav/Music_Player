const emailInput = document.getElementById('email');
const passInput = document.getElementsByName('pass')[0];
const passRepInput = document.getElementsByName('pass-rep')[0];
const submitButton = document.getElementById('myButton');

submitButton.addEventListener('click', function(event) {
  const email = emailInput.value;
  const password = passInput.value;
  const confirmPassword = passRepInput.value;

  if (!emailIsValid(email) || password !== confirmPassword) {
    event.preventDefault();
    alert('Please enter a valid email and make sure the passwords match.');
  }
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}



