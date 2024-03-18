export function createList(number, text = 'Text') {
  // let result = '<ul>\n';

  // for (let flag = 1; flag <= number; flag++) {
  //   result += `  <li>${text} ${flag}</li>\n`;
  // }

  // result += '</ul>';

  // return result;
  const lis = [...Array(number)]
    .map((value, index) => `  <li>${text} ${index + 1}</li>\n`)
    .join('');

  return `<ul>\n${lis}</ul>`;
}
