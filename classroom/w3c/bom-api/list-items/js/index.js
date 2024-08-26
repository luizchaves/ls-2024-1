import { createList } from './lib.js';

const list = createList(3); // string '<ul><li>...

const div = document.querySelector('div'); // Element

div.innerHTML = list;
