let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let currentInput = "";
let operator = "";
let firstValue = null;
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (!isNaN(value) || value === ".") {
            currentInput += value;
            input.value = currentInput;
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput === "") return;

            firstValue = parseFloat(currentInput);
            operator = value;
            input.value = firstValue + " " + operator;
            currentInput = "";
        }
        else if (value === "=") {
            if (currentInput === "" || operator === "") return;

            let secondValue = parseFloat(currentInput);
            let result;

            if (operator === "+") result = firstValue + secondValue;
            if (operator === "-") result = firstValue - secondValue;
            if (operator === "*") result = firstValue * secondValue;
            if (operator === "/") result = secondValue !== 0 ? firstValue / secondValue : "Error";

            input.value = result;
            currentInput = result.toString();
            operator = "";
        }
        else if (value === "AC") {
            currentInput = "";
            operator = "";
            firstValue = null;
            input.value = "";
        }
        else if (value === "DEL") {
            currentInput = currentInput.substring(0, currentInput.length - 1);
            input.value = currentInput;
        }
    });
});
