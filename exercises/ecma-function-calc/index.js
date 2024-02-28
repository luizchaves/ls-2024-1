function calc(value1, value2, operator) {
  return eval(`${value1} ${operator} ${value2}`);
}

console.log(calc(1, 1, '+')); //=> 2
console.log(calc(1, 1, '-')); //=> 0
console.log(calc(1, 1, '*')); //=> 1
console.log(calc(1, 1, '/')); //=> 1
