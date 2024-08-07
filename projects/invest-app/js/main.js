import { investments } from './data';
import { InvestmentCard } from './components/InvestmentCard';

import '../css/main.css';

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');
