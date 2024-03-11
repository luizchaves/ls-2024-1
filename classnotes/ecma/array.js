// create array with values
let values = [1, 2, 3, 4, 5];

// access the array elements
console.log(values); //=> [1, 2, 3, 4, 5]
console.log(values[0]); //=> 1
console.log(values.at(-1)); //=> 5

// create empty array
values = [];

// adding
values[0] = 1;
console.log(values); //=> [1]

values[1] = 2;
console.log(values); //=> [1, 2]

values.push(3);
console.log(values); //=> [1, 2, 3]

// changing values
values[0] = 10;

// mutable [0, 1, 2]
const numbers = [0, 1, 2];
// numbers = 10; // TypeError: Assignment to constant variable.

// [0, 1, 2] <= 3
numbers.push(3);
console.log(numbers); //=> [0, 1, 2, 3]

// -1 => [0, 1, 2, 3]
numbers.unshift(-1);
console.log(numbers); //=> [-1, 0, 1, 2, 3]

// multiple types
const person = ['Alice', 'alice@email.com', 20, false, ['LS', 'BD', 'ED']];

console.log(person[4]); //=> ['LS', 'BD', 'ED']
console.log(person.at(-1)); //=> ['LS', 'BD', 'ED']
console.log(person[4][0]); //=> 'LS'
console.log(person.at(-1)[0]); //=> 'LS'

// destructuring arrays
// const name = person[0];
// const email = person[1];

// const [name, email] = ['Alice', 'alice@email.com', 20, false, ['LS', 'BD', 'ED']]
// const [name, email] = person;
// const [name, email, , , subjects] = person;
const [name, email, , , [firstSubject]] = person;

console.log(name); //=> 'Alice'

// const state = useState('');
// const [name, setName] = useState('');

// spread operator
const id = 123;

const student = [id, ...person];

console.log(student); //=> [123, 'Alice', 'alice@email.com', 20, false, ['LS', 'BD', 'ED']]

console.log(Math.min(10, 20, 5)); //=> 5
console.log(Math.min([10, 20, 5])); //=> NaN
console.log(Math.min(...[10, 20, 5])); //=> 5

// iteration
// [10, 20, 30]
values = [10, 20, 30];

// for
for (let index = 0; index < values.length; index++) {
  console.log(values[index]);
}

// for..of [10, 20, 30]
for (const value of values) {
  console.log(value);
}

// for..in [0, 1, 2]
for (const index in values) {
  console.log(values[index]);
}

// entries
for (const [index, value] of values.entries()) {
  console.log(value);
}

// Object Array
// Property: length
// Mutator: push(), unshift(), pop(), shift(), reverse(), sort(), splice()
// Accessor: includes(), join(), slice()
// Iteration: map(), filter(), reduce(), every(), some()

[1, 2, 3].forEach((x) => {
  x = x + 5;
  console.log(x);
}); //=> undefined

console.log([1, 2, 3].map((x) => 2 * x)); //=> [2, 4, 6]
console.log([1, 2, 3].map((x) => x + 5)); //=> [6, 7, 8]

console.log([1, 2, 3, 4, 5].filter((x) => x % 2 === 0)); //=> [2, 4]

console.log([1, 2, 3, 4].reduce((acc, value) => acc + value, 0)); //=> 10
console.log([1, 2, 3, 4].reduce((acc, value) => acc + value)); //=> 10

console.log([1, 2, 3, 4, 5].every((x) => x % 2 === 0)); //=> false
console.log([1, 3, 5].every((x) => x % 2 === 0)); //=> false
console.log([2, 4, 6].every((x) => x % 2 === 0)); //=> true

console.log([1, 2, 3, 4, 5].some((x) => x % 2 === 0)); //=> true
console.log([1, 3, 5].some((x) => x % 2 === 0)); //=> false
console.log([2, 4, 6].some((x) => x % 2 === 0)); //=> true
