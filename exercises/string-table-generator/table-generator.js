export function createTable(rows, cols, text) {
  // let table = '';

  // for (let row = 1; row <= rows; row++) {
  //   const data = [];

  //   for (let col = 1; col <= cols; col++) {
  //     data.push(text ? text + ` ${row}.${col}` : `${row}.${col}`);
  //   }

  //   table += `${data.join(' ')}\n`;
  // }

  // return table;

  return [...Array(rows)]
    .map((_, row) =>
      [...Array(cols)]
        .map((_, col) =>
          text ? text + ` ${row + 1}.${col + 1}` : `${row + 1}.${col + 1}`
        )
        .join(' ')
    )
    .join('\n');
}

export function createTableHTML(rows, cols, text) {
  // TODO
}
