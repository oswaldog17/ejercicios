const arreglo = [2, 7, 8, 12, 10, 15, 9, 6, 11];   
 for (let i = 0; i < arreglo.length; i++) {
      if (i % 2 === 0) {
        continue;
      }
      console.log(arreglo[i]);
    }

/* if (i % 2 === 0) {
        continue; 

esta parte del codigo, significa que la sentencia continue 
va a SALTAR todas las posiciones que sean PAR, por lo tanto, 
la consola solo imprimirá las posiciones 
IMPAR: [1], [3], [5], [7], es decir, 
donde se encuentran los números: 7,12,15,6.

(recuerden que las posiciones comienzan desde [0]).
*/

const arreglo2 = [2, 7, 8, 12, 10, 15, 9, 6, 11];   
 for (let i = 0; i < arreglo2.length; i++) {
      if (i % 2 === 1) {
        continue;
      }
      console.log(arreglo2[i]);
    }

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = numeros.length; i < 15; i++) {
	numeros.push(i+1)
    console.log(numeros[i]);
}

const autos = require('./autos');

const concesionaria = {
  autos: autos,
  busquedaPorPatente: function(patente) {
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].patente == patente) {
        return autos[i]
      }else{
      return null;
            }
        }
    }
}