import InvestmentCard from '../components/InvestmentCard';
import Storage from '../services/storage';

function load() {
  const investments = Storage.read('investments');

  investments.forEach(InvestmentCard.create);
}

function create(investment) {
  delete investment.id;

  const createdInvestment = Storage.create('investments', investment);

  InvestmentCard.create(createdInvestment);
}

function update(investment) {
  const { id } = investment;

  const updatedInvestment = Storage.update('investments', id, investment);

  InvestmentCard.update(updatedInvestment);
}

function remove(investment) {
  const { id } = investment;

  Storage.remove('investments', id);

  InvestmentCard.remove(id);
}

export default { load, create, update, remove };
