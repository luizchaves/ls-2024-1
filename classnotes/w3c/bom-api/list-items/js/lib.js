export function createList(number, text = 'Text') {
  let result = '<ul>';

  for (let flag = 1; flag <= number; flag++) {
    result += `<li>${text} ${flag}</li>`;
  }

  result += '</ul>';

  return result;
}
