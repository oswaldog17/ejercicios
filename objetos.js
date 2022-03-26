const identidad = {
    nombre : 'Oswaldo',
    apellido : 'Galet',
    edad: 35,
    pasatiempos : ['Aprender', 'Ejercicio', 'Cocteles','Conversar'],
    soltero : false,
    contacto : {
        email : 'oswaldogaletr@gmail.com',
        twitter : '@oswaldogalet',
        telefono : 1123860433,
    },
    saludo : function () {
        console.log('Hola :)')
    },
    decirMiNombre:function () {
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en Twitter`);
    }
}

// console.log(identidad);

console.log(identidad.pasatiempos);
console.log(identidad.pasatiempos[2]);
console.log(identidad.contacto.twitter);
identidad.saludo();
identidad.decirMiNombre();

console.log(Object.keys(identidad));
console.log(Object.values(identidad));
console.log(identidad.hasOwnProperty('nombre'));