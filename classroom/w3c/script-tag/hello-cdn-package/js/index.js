import { sum } from './lib/math.js';
// https://www.jsdelivr.com/package/npm/cpf-cnpj-validator
import { cpf } from 'https://cdn.jsdelivr.net/npm/cpf-cnpj-validator@1.0.3/+esm';

console.log(sum(1, 1));
console.log(math.derivative('x^2', 'x').toString()); //=> 2 * x
console.log(cpf.generate());
