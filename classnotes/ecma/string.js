// String (', ", `)
console.log('Hello'); // single quote
// console.log("Hello"); // double quote
console.log(`Hello`); // Template literals / Template strings

// Concat (+)
const student = 'Alice';
const email = 'alice@email.com';
const phone = '123456789';

// <tr><td></td><td></td><td></td></tr>
console.log(
  '<tr><td>' +
    student +
    '</td><td>' +
    email +
    '</td><td>' +
    phone +
    '</td></tr>'
);

// Template literals / Template strings
// multi-line strings
// string interpolation
console.log(`
  <tr>
    <td>${student + ' ' + email}</td>
    <td>${phone}</td>
  </tr>
`);

// Array of characters
let language = 'javascript';

console.log(language[0]);

language[0] = 'J';

console.log(language);

// Object String

// string primitive vs object String
console.log(typeof 'l'); // string
console.log(typeof String('l')); // string
console.log(typeof new String('l')); // object

console.log(String('l') instanceof String); // false
console.log(new String('l') instanceof String); // true

console.log(String('l') == new String('l')); // true
console.log(String('l') === new String('l')); // false
console.log('l' === new String('l')); // false

// Convert String(), .toString()
console.log((10).toString());
console.log(String(10));
console.log(Number('10'));

// String.length
console.log('javascript'.length);

// String.padStart
const number = 9;
console.log(number < 10 ? '0' + number : number);
console.log(String(number).padStart(2, '0'));

// String.split / Array.join
const name = 'John Doe';

console.log(name.split(' ')); // ['John', 'Doe']
console.log(name.split('')); // ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e']
console.log(name.split('').reverse().join('')); // 'eoD nhoJ'

// String.toLowerCase
console.log('Alice'.toLowerCase());

// String.includes
console.log('CDB Inter'.includes('CDB')); // true
console.log('CDB Inter'.includes('cdb')); // false
console.log('CDB Inter'.toLowerCase().includes('cdb'.toLowerCase())); // true

// String.localeCompare
console.log(['charlie', 'Bob', 'alice'].sort());
// ['Bob', 'alice', 'charlie']

console.log(['charlie', 'Bob', 'alice'].sort((a, b) => a.localeCompare(b)));
// ['alice', 'Bob', 'charlie']

console.log([100, 20, 1].sort());
// [1, 100, 2]
console.log([100, 20, 1].sort((a, b) => a - b));
// [1, 20, 100]
