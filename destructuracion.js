const numeros = [1, 2, 3];

// Guardar cada número en variables diferentes

// sin destructuración

let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres);

// con destructuración

let [one, two, three] = numeros;
/* a cada posición del arreglo la estoy guardando
dinámicamente en una variable (one, two, three)*/

console.log(one, two, three);

// destructuración a objeto
/* En objetos tienen que tener el mismo 
nombre la variable y la propiedad que aislaré 
en una sola variable*/

let persona = {
  nombre: "Oswaldo",
  apellido: "Galet",
  edad: 35,
};

let { nombre, apellido, edad } = persona;

console.log(persona);
console.log(nombre, apellido, edad);
