import { investments } from './data/seed';
import { InvestmentCard } from './components/InvestmentCard';
import Storage from './services/storage';

import '../css/main.css';

Storage.load('investments', investments);

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = Storage.read('investments')
  .map((investment) => InvestmentCard(investment))
  .join('');
