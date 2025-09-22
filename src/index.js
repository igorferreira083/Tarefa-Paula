const soma = require('./soma');

module.exports = (req, res) => {
  const resultado = soma(2, 3);
  res.status(200).send(`API funcionando! Resultado da soma: ${resultado}`);
};
