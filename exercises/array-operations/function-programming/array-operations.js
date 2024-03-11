export function sum(array) {
  try {
    // let sum = 0;

    // for (let value of array) {
    //   sum += value;
    // }

    // return sum;
    return array.reduce((acc, value) => acc + value, 0);
  } catch (error) {
    return NaN;
  }
}

export function product(array) {
  try {
    // let product = 1;

    // for (let value of array) {
    //   product *= value;
    // }

    // return product;
    return array.reduce((acc, value) => acc * value, 1);
  } catch (error) {
    return NaN;
  }
}

export function sumOdds(array) {
  try {
    // let sum = 0;

    // for (let value of array) {
    //   if (value % 2) sum += value;
    // }

    // return sum;
    return array.filter((x) => x & 1).reduce((acc, value) => acc + value, 0);
  } catch (error) {
    return NaN;
  }
}
