export function gtZero(products) {
  return products.filter((product) => product[2] > 0);
}

export function subTotal(products) {
  // product [1, 10.0, 2] -> [1, 20]
  // return products.map((product) => [product[0], product[1] * product[2]]);
  // const [id, price, qtd] = [1, 10.0, 2]
  return products.map(([id, price, qtd]) => [id, price * qtd]);
}

export function total(products) {
  // product [1, 10.0, 2] -> 20
  return products.reduce((acc, [id, price, qtd]) => acc + price * qtd, 0);
}
