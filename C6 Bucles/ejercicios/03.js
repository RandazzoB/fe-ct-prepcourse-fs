function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x === y) return x || y;
  else if (x > y) return x;
   else return y;
}

console.log(obtenerMayor(7,7));
console.log(obtenerMayor(9,7));
console.log(obtenerMayor(7,10));
module.exports = obtenerMayor;
