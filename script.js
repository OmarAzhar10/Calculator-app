let display = document.getElementById("display");

// Function to append numbers and operators to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to remove the last character (backspace)
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value); // Use eval for calculation
  } catch (error) {
    display.value = "Error"; // Show error if the expression is invalid
  }
}