function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if(valor === true) return 'Soy verdadero';
  else return 'Soy falso'
}

console.log(esverdadero(true));
console.log(esverdadero(false));
console.log(esverdadero(7));
module.exports = esVerdadero;
