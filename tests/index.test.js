// tests/index.test.js
const assert = require('assert');
const soma = require('../src/index');

// Teste 1: 2 + 3 = 5
assert.strictEqual(soma(2, 3), 5, 'Erro: 2 + 3 deveria ser 5');

// Teste 2: 1 + 4 = 5
assert.strictEqual(soma(1, 4), 5, 'Erro: 1 + 4 deveria ser 5');

console.log('Os Testes deram certo');
