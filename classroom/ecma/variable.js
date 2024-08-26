// const
const number = 10;

// 'const' declarations must be initialized.
// const number;

// TypeError: Assignment to constant variable.
// number = 20;

const numbers = [1, 10];

numbers[0] = 10;

console.log(numbers);

// Cannot redeclare block-scoped variable 'number'.
// const number = 'a';

function doSomething() {
  const number = 10;
  const a = 1;
}

// ReferenceError: a is not defined
// console.log(a);

// let
let name = 'John';

name = 'Alice';

console.log(name);

let names;

names = ['Alice', 'Bob'];

console.log(names);

// var
var variable;

var variable;
