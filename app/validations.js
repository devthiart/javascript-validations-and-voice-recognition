function attemptIsValid(attempt) {
  console.log(attempt);
  const number = tryConvertToNumber(attempt);

  if (attemptIsNumber(number)) {
    attemptElement.innerHTML += `
      <div>
        Invalid value: Value is not a number.
      </div>
    `;
    return;
  }

  if(numberGreaterOrLessThanAllowedValue(number)) {
    attemptElement.innerHTML += `
      <div>
        Invalid value: The number must be between ${minValue} and ${maxValue}.
      </div>
    `;
    return;
  }

  if(number === secretNumber) {
    document.body.innerHTML = `
      <h2>Congratulations!</h2>
      <h3>The secret number was ${secretNumber}.</h3>
    `;
    return;
    
  } else if (number > secretNumber) {
    attemptElement.innerHTML += `
      <div>The secret number is less <i class="fa-solid fa-arrow-down-long"></i></div>
    `;
  } else {
    attemptElement.innerHTML += `
      <div>The secret number is greater <i class="fa-solid fa-arrow-up-long"></i></div>
    `;
  }
}

function tryConvertToNumber(attempt) {
  return +attempt;
}

function attemptIsNumber(number) {
  return Number.isNaN(number);
}

function numberGreaterOrLessThanAllowedValue(number) {
  return number > maxValue || number < minValue;
}


