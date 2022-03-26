let ejemplo = " Quiero comer carne ";
console.log(ejemplo.length);

let ejemplo_indexof = "Necesito ahorrar dinero";
console.log(ejemplo_indexof.indexOf("ahorrar"));
console.log(ejemplo_indexof.indexOf("jugar"));

let ejemplo_slice = "Voy a viajar al Caribe";
console.log(ejemplo_slice.slice(5,12));

console.log(ejemplo.trim());

console.log(ejemplo.split(" "));

console.log(ejemplo_slice.replace("al Caribe","a Holanda"));


function dominio (nombreDominio) {
    return "http//www." + nombreDominio;
}

console.log(dominio("digitalhouse.com"));


function reemplazoPalabras (texto, palabra, reemplazo){
    return texto.replace(palabra,reemplazo);
}
let ejemploReemplazo = reemplazoPalabras("Estoy comiendo una mala fruta", "mala", "buena");

console.log(ejemploReemplazo);


function menciona (texto,palabra){
    let index = texto.indexOf(palabra)
    return index > -1
}
console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','24'));

let texto2 =  "¡Hola!, soy Carli";
let licenciada= texto2.slice(12)
console.log(licenciada);

/* averiguar 
function recorta (texto3){
return texto3.slice()
    }
*/




