// Representação de Investimento
// name: Tesouro Selic 2029
// value: 1000
// origin: Tesouro Nacional
// category: Pos
// date: 20/03/2024
// interest: 100% Selic
const selic2029Array = [
  'Tesouro Selic 2029',
  1000,
  'Tesouro Nacional',
  'Pos',
  '20/03/2024',
  '100% Selic',
];

console.log(selic2029Array[1]);

// JSON - JavaScript Object Notation
const selic2029Json = {
  // 'name': 'Tesouro Selic 2029',
  name: 'Tesouro Selic 2029',
  value: 1000,
  origin: 'Tesouro Nacional',
  category: 'Pos',
  date: '20/03/2024',
  interest: '100% Selic',
};

console.log(selic2029Json['value']);
console.log(selic2029Json.value);

// Class Definition
class Investment {
  constructor(name, value, origin, category, date, interest) {
    this.name = name;
    this.value = value;
    this.origin = origin;
    this.category = category;
    this.date = date;
    this.interest = interest;
  }
}

const selic2029Obj = new Investment(
  'Tesouro Selic 2029',
  1000,
  'Tesouro Nacional',
  'Pos',
  '20/03/2024',
  '100% Selic'
);

// Accessing properties
console.log(selic2029Obj.value);

// console.table
console.log(selic2029Obj);
console.table(selic2029Obj);
console.table([selic2029Obj, selic2029Obj]);

// private property (#)
class InvestmentPrivate {
  #name;
  #value;
  #origin;
  #category;
  #date;
  #interest;

  constructor(name, value, origin, category, date, interest) {
    this.#name = name;
    this.#value = value;
    this.#origin = origin;
    this.#category = category;
    this.#date = date;
    this.#interest = interest;
  }
}

const selic2029Private = new InvestmentPrivate(
  'Tesouro Selic 2029',
  1000,
  'Tesouro Nacional',
  'Pos',
  '20/03/2024',
  '100% Selic'
);

console.log(selic2029Private.value);

// Property Shorthand { value1, value2 }
const name = 'Tesouro Selic 2029';
const value = 1000;
const origin = 'Tesouro Nacional';
const category = 'Pos';
const date = '20/03/2024';
const interest = '100% Selic';

console.log({
  name: name,
  value: value,
  origin: origin,
  category: category,
  date: date,
  interest: interest,
});

console.log({
  name,
  value,
  origin,
  category,
  date,
  interest,
});

// Spread properties { ...values, value }
let nubankInvestment = {
  ...selic2029Json,
  broker: 'Nubank',
};

console.table(nubankInvestment);

// Copy reference
let xpInvestment = nubankInvestment;

xpInvestment.broker = 'XP';

console.table(xpInvestment);

console.table(nubankInvestment);

// Clone
nubankInvestment.broker = 'Nubank';

xpInvestment = { ...nubankInvestment };

xpInvestment.broker = 'XP';

console.table(xpInvestment);

console.table(nubankInvestment);

// Property (variable) {[key]: value}
const property = 'broker';
const broker = 'BTG';

console.table({
  ...xpInvestment,
  broker: 'BTG',
});

console.table({
  ...xpInvestment,
  [property]: broker,
});

// JSON.stringify
console.log(selic2029Json);
console.log(JSON.stringify(selic2029Json));
console.log(JSON.stringify(selic2029Json, null, 2));

// JSON.parse
const investmentString =
  '{"name":"Tesouro Selic 2029","value":1000,"origin":"Tesouro Nacional","category":"Pos","date":"20/03/2024","interest":"100% Selic"}';
console.log(JSON.parse(investmentString));
