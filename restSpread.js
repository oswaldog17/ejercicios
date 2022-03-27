function sumar (a,b, ...c){
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    })

    return resultado;
}
console.log('---'+ sumar.length);
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log('----'+sumar.length);
console.log(sumar(1,2,3,4,5));


const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

//const arr3 = [arr1, arr2];
//El array 3 tendrá dos posiciones que cada una tenía 5 posiciones

const arr3 = [...arr1, ...arr2];
/* ahora tengo un solo arreglo de diez
posiciones producto de 
los valores de los arreglos 1 y 2. 
Se está expandiendo una expresión mietras
recibe múltiples valores*/ 
console.log(arr3);


