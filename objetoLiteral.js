let miPais = {
    nombre:"Argentina",
    capital:"Buenos Aires",
    poblacion: 50
}

console.log("La capital de " + miPais.nombre + " es " + miPais.capital);

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas) {
        this.energia -= (horas * 5);
        this.experiencia += (horas * 2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(3);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);



