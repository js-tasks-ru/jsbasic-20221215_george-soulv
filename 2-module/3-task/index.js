let calculator = {
  first: 0,
  second: 0,
  read(a, b) {
    first = a;
    second = b;
  },
  sum() {
    return first + second;
  },
  mul() {
    return first * second;
  }  
};

calculator.read(3, 5);
console.log(calculator.sum());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
//window.calculator = calculator; // делает ваш калькулятор доступным глобально
