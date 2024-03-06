import * as Calc from './lib.js';
import {
  sum as addition,
  minus as subtraction,
  multiply as multiplication,
  divide as division,
} from './lib.js';

console.log(Calc.sum(1, 1)); //=> 2
console.log(Calc.minus(1, 1)); //=> 0
console.log(Calc.multiply(2, 1)); //=> 2
console.log(Calc.divide(2, 1)); //=> 2

console.log(addition(1, 1)); //=> 2
console.log(subtraction(1, 1)); //=> 0
console.log(multiplication(2, 1)); //=> 2
console.log(division(2, 1)); //=> 2
