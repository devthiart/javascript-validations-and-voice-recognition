const minValue = 1;
const maxValue = 100;
const secretNumber = generateRandomNumber(minValue, maxValue);

function generateRandomNumber() {
  return parseInt(Math.random() * maxValue + 1);
}

console.log("Secret Number: ", secretNumber);

const elementMinValue = document.getElementById('min-value');
elementMinValue.innerHTML = minValue;

const elementMaxValue = document.getElementById('max-value');
elementMaxValue.innerHTML = maxValue;
