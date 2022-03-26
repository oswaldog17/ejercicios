function agregarHttp(url) {
    return "http://" + url;
}

function procesar(unArray,callback) {
    let sitiosWeb = [];
    for (let i = 0; i < unArray.length; i++){
        sitiosWeb.push(callback(unArray[i]));
    }
    return sitiosWeb;
}

function sitioWebCompleto (unArray, callback) {
    return procesar(unArray, callback);
}

console.log(sitioWebCompleto(["www.yahoo.com", "www.google.com", "www.git.com"], agregarHttp));