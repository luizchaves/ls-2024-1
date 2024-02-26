// function declaration
function sum(a, b) {
  return a + b;
}

// call function
console.log(sum(1)); //=> NaN
console.log(sum(1, 1)); //=> 2
console.log(sum(1, 1, 1)); //=> 2
console.log(sum('a', 1)); //=> 'a1'

// anonymous/lambda function
const minus = function (a, b) {
  return a - b;
};

console.log(minus(1, 1)); //=> 0

// arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 1)); //=> 2

const divide = (a, b) => a / b;

console.log(divide(2, 1)); //=> 2

// callback function
function calc(value1, value2, callback) {
  return callback(value1, value2);
}

console.log(calc(1, 1, (a, b) => a + b)); //=> 2
console.log(calc(1, 1, (a, b) => a - b)); //=> 0

// default param

// rest param
