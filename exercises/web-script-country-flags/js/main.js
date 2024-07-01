import flags from './model/flags.js';

function countryComponent(country) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="./imgs/flags/${country.id}.png" alt="${country.name}">
    <p>${country.name}</p>
  </div>`;
}

const main = document.querySelector('main.row');

// for (const country of flags) {
//   const view = countryComponent(country);

//   main.insertAdjacentHTML('beforeend', view);
// }

main.innerHTML = flags.map((country) => countryComponent(country)).join('');
