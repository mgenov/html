var dotRegex = /[.]/;
var operationRegex = /[*/+-]/;
var calculation = "";

function enterValue(value, screen) {
    screen.value += value;
    calculation += value; 
}

function clearLast(screen) {
	screen.value = screen.value.slice(0, screen.value.length-1);
}

function clearDisplay(screen) {
	screen.value = "";
	calculation = "";
}

function getSum(screen) {
	screen.value = eval(calculation);
}

function setDot(screen) {
	if (!dotRegex.test(display.value)) {
		screen.value += ".";
		calculation += ".";
	}
}

function addOperand(operand, screen) {
	var lastOperation = calculation.slice(calculation.length-1);
	if (!operationRegex.test(lastOperation)) {
		calculation += operand;
		screen.value = "";
		return;
	}
	var subExpression = calculation.slice(0, calculation.length-1);
	calculation = subExpression + operand;
	screen.value = "";
}