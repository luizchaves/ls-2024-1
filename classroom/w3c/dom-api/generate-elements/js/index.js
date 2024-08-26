import { investments } from './data.js';
import { InvestmentCard } from './components/InvestmentCard.js';

const investmentGrid = document.querySelector('.investments');

for (const investment of investments) {
  const card = InvestmentCard(investment);

  // investmentGrid.innerHTML += card;
  investmentGrid.insertAdjacentHTML('beforeend', card);
}

// investmentGrid.innerHTML = investments
//   .map((investment) => InvestmentCard(investment))
//   .join('');
