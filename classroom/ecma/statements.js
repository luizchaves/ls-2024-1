// statements (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

// if
const number = 10;

if (number > 0) console.log('This number is positive');

if (number > 0) {
  console.log('This number is positive');
}

if (number > 0) {
  console.log('This number is');
  console.log('positive');
}

// if..esle
if (number > 0) {
  console.log('This number is positive');
} else {
  console.log('This number is negative or zero');
}

if (number > 0) console.log('This number is positive');
else console.log('This number is negative or zero');

// ? :
const result =
  number > 0 ? 'This number is positive' : 'This number is negative or zero';

console.log(result);

// if..else if..else
if (number > 0) {
  console.log('This number is positive');
} else if (number < 0) {
  console.log('This number is negative');
} else {
  console.log('This number is zero');
}

// switch
const value1 = 10;
const value2 = 5;
const operator = '+'; // +, -

// if (operator === '+') {
//   console.log(value1 + value2);
// } else if (operator === '-') {
//   console.log(value1 - value2);
// }

switch (operator) {
  case '+': // operator === '+'
    console.log(value1 + value2);
    break;
  case '-':
    console.log(value1 - value2);
    break;
  default:
    console.log('Operator invalid');
}

// if (number > 0) {
//   console.log('This number is positive');
// } else if (number < 0) {
//   console.log('This number is negative');
// } else {
//   console.log('This number is zero');
// }

switch (true) {
  case number > 0: // true === number > 0
    console.log('This number is positive');
    break;
  case number < 0:
    console.log('This number is negative');
    break;
  default:
    console.log('This number is zero');
}

// while
let flag = 0;

while (flag <= 9) {
  console.log(flag);
  flag++; // flag = flag + 1
}

// do..while
flag = 0;

do {
  console.log(flag);
  flag++; // flag = flag + 1
} while (flag <= 9);

// for
for (let flag = 0; flag <= 9; flag++) {
  console.log(flag);
}

// 00, 01, ..., 09
// 10, 11, ..., 19
// ...
// 90, 91, ..., 99
let numberList = '';

for (let flag = 0; flag <= 99; flag++) {
  // number
  if (flag < 10) {
    numberList += '0';
  }

  numberList += flag;

  // , or \n
  if (flag % 10 === 9) {
    numberList += '\n';
  } else {
    numberList += ', ';
  }
}

console.log(numberList);

numberList = '';

for (let flag = 0; flag <= 99; flag++) {
  // number
  numberList += flag < 10 ? `0${flag}` : flag;

  // , or \n
  numberList += flag % 10 === 9 ? '\n' : ', ';
}

console.log(numberList);

// for for

// 99, 98, ..., 90
// ...
// 19, 18, ..., 10
// 00, 08, ..., 00

// 99, 97, ..., 91
// ...
// 19, 17, ..., 11
// 00, 07, ..., 01
