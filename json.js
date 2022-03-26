let estudiantes ={
    nombre: "Oswaldo",
    apellido: "Scholtz",
    edad: 35,
}

let datosConvertidos = JSON.stringify(estudiantes);

console.log(datosConvertidos);

let conversionDoble = JSON.parse(datosConvertidos);

console.log(conversionDoble);

