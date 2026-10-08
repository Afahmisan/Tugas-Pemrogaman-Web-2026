const firstNumber = document.getElementById("num1");
const secondNumber = document.getElementById("num2");

const operatorSelect = document.getElementById("operator");
const calculateBtn = document.getElementById("hitung");

function kalkulator(a, b, operator) {
    if (operator === "/" && b === 0) {
        return "Error: Pembagian dengan 0 tidak diperbolehkan!";
    }

    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
    else return "Error: Operator tidak valid";
}


calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);
    const operator = operatorSelect.value;

    const result = kalkulator(num1, num2, operator);
    const resultContainer = document.getElementById("result");
    if (typeof result === "number") {
        resultContainer.textContent = `${result}`;
    } else {
        resultContainer.textContent = result;
    }
});


console.log("Percobaan UJI kalkulator.js");
console.log(kalkulator(10, 5, "+")); 
console.log(kalkulator(10, 5, "-")); 
console.log(kalkulator(10, 5, "*"));
console.log(kalkulator(10, 5, "/"));
console.log(kalkulator(10, 0, "/"));
