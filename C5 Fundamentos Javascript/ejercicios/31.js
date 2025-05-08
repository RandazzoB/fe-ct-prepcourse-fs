// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  return Math.pow(num, 2);
}

console.log(elevarAlCuadrado(6));  // Debería mostrar 36
console.log(elevarAlCuadrado(0));  // Debería mostrar 0
console.log(elevarAlCuadrado(4));  // Debería mostrar 16

module.exports = elevarAlCuadrado;
