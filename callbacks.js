function sumar(n1, n2) {
  return n1 + n2;
}
function restar(n1, n2) {
  return n1 - n2;
}
function multiplicar(n1, n2) {
  return n1 * n2;
}
function dividir(n1, n2) {
  return n1 / n2;
}
function calculadora(n1, n2, callback) {
  return callback(n1, n2);
}

// console.log(calculadora(2,5,sumar));

function agregarHttp(url) {
  return "http://www." + url;
}

function procesar(unArray, callback) {
  let sitiosWeb = [];
  for (let i = 0; i < unArray.length; i++) {
    sitiosWeb.push(callback(unArray[i]));
  }
  return sitiosWeb;
}

function sitioWebCompleto(a, cb) {
  return procesar(a, cb);
}

// console.log(sitioWebCompleto(["yahoo.com", "google.com", "git.com", "prueba.com"], agregarHttp));

function cuadradoCallback(value) {
  return callback(value, value * value);
}

console.log(cuadradoCallback(3));
