const soma = require('../src/index');

test('2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('1 + 4 deve ser 5', () => {
  expect(soma(1, 4)).toBe(5);
});

console.log('Os Testes deram certo');
