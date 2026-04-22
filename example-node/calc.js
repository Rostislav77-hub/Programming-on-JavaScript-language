// Функция-калькулятор
function calculator(a, b, operator) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Ошибка: деление на ноль!";
        default: return "Неизвестная операция";
    }
}

// Работаем с калькулятором
console.log(calculator(10, 5, '+'));  // 15
console.log(calculator(10, 5, '-'));  // 5
console.log(calculator(10, 5, '*'));  // 50
console.log(calculator(10, 5, '/'));  // 2
console.log(calculator(10, 0, '/'));  // Ошибка
