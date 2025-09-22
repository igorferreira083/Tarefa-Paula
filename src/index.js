const soma = require('./soma');

function handlerSimples() {
  const resultado = soma(2, 3);
  return `API funcionando! Resultado da soma: ${resultado}`;
}

console.log(handlerSimples()); // só para ver o resultado
