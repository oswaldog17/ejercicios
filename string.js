let nombre = "Oswaldo";
let nacionalidad = "Venezolana";
let residencia = "Argentina";

console.log(nombre, nacionalidad, residencia);
console.log(nombre.length,nacionalidad.length,residencia.length);
console.log(nombre.indexOf("O"), nacionalidad.toUpperCase(), residencia.toLowerCase());


//Interpolción de variables
    //Template String
let saludo = `Hola mi nombre es ${nombre.toUpperCase()} y mi nacionalidad es ${nacionalidad.toLowerCase()}`;

console.log(saludo);