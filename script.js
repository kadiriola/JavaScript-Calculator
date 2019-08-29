var css = document.querySelector(".css");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(" + color1.value +", "+ color2.value +")";

	css.textContent = body.style.background + ";";  
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


/*// JavaScript calculator
let num1 = Number(prompt("Input the first number"));
let num2 = Number(prompt("Input the second number"));
let operator = prompt("Input operator")

function calculator() {
	if (operator === "+") {
		alert("Answer =\t" + num1 + num2);

	} else if (operator === "-") {
		alert("Answer =\t" + num1 - num2);

	} else if (operator === "*") {
		alert("Answer =\t" + num1 * num2);

	}else if (operator === "/") {
		alert("Answer =\t" + num1 / num2);

	} else {
		alert("Syntax error")
	}
	
} 

calculator();*/





/*Javascript Code for the calculator*/

// store the elements to log to the DOM 
var button1 = document.querySelector(".onclick1");
var button2= document.querySelector(".onclick2");
var button3 = document.querySelector(".onclick3");
var button4 = document.querySelector(".onclick4");


 function addCalc() {
	let num1 = Number(prompt("Input the first number"));
	let num2 = Number(prompt("Input the second number"));
	let operator =prompt("Input operator");
	let result = num1 + num2;
	if (operator === "+") {
		alert("Answer =\t" + result);

	} else {
		alert("Syntax error")
	}
}
button1.addEventListener("click",addCalc);

function subtractCalc() {
	let num1 = Number(prompt("Input the first number"));
	let num2 = Number(prompt("Input the second number"));
	let operator =prompt("Input operator");
	let result = num1 - num2;
	if (operator === "-") {
		alert("Answer =\t" + result);

	} else {
		alert("Syntax error")
	}
}
button2.addEventListener("click", subtractCalc);

function multiplyCalc() {
	let num1 = Number(prompt("Input the first number"));
	let num2 = Number(prompt("Input the second number"));
	let operator =prompt("Input operator");
	let result = num1 * num2;
	if (operator === "*") {
		alert("Answer =\t" + result);

	}else {
		alert("Syntax error")
	}
}
button3.addEventListener("click", multiplyCalc);

function divideCalc() {
	let num1 = Number(prompt("Input the first number"));
	let num2 = Number(prompt("Input the second number"));
	let operator =prompt("Input operator");
	let result = num1 / num2;
	if (operator === "/") {
		alert("Answer =\t" + result);

	}else {
		alert("Syntax error");
	}
}
button4.addEventListener("click",divideCalc);