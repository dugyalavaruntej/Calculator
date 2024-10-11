const display = document.getElementById('display');
let currentValue = '';
let lastOperation = '';
let result = '';

// Listen to button clicks
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    // Handle different button functionality
    if (button.id === 'clear') {
      // Clear the display when the clear button is pressed
      display.value = '';
      currentValue = '';
      result = '';
    } else if (button.id === 'equals') {
      try {
        // Evaluate the expression
        display.value = eval(display.value);
        result = display.value;
      } catch (error) {
        display.value = 'Error';
      }
    } else if (value === 'sqrt') {
      // Square root operation
      display.value = Math.sqrt(parseFloat(display.value));
    } else if (value === 'exp') {
      // Exponentiation (square) operation
      display.value = Math.pow(parseFloat(display.value), 2);
    } else if (value === '%') {
      // Percentage operation
      display.value = parseFloat(display.value) / 100;
    } else {
      // Append numbers/operators to the display
      display.value += value;
    }
  });
});
