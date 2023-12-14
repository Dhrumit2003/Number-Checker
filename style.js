function checkNumber() {
    // Get the input value
    const number = parseFloat(document.getElementById('numberInput').value);

    // Check if the number is positive, negative, or zero
    if (number > 0) {
      document.getElementById('result').innerText = `${number} is a positive number.`;
    } else if (number < 0) {
      document.getElementById('result').innerText = `${number} is a negative number.`;
    } else {
      document.getElementById('result').innerText = `The number is zero.`;
    }
  }