let comida = "Pescado"; 

let eleccion = comida == "Pescado"? "Qué bueno, es lo que quería": "Uhmm, qué mal, comeré carne";

console.log(eleccion);

let almuerzo = "Pollo";
if (almuerzo == "Pollo"){
    console.log("Preguntar por ensalada");
}else {
    console.log("Considerar ir a otro restaurante");
}


let cena = "Pollo";

switch (cena){
    case "Pasta": 
        console.log("Pediré ensalada por Rappi");
        break;
    case "Pollo":
        console.log("Preguntar si es asado o frito");
        break;
    case "Pescado":
        console.log("Aceptarlo");
        break;
    default: 
        console.log("Ir a un restaurante");
        break;
}

let dia = 'jueves'

function finDeSemana (dia) {
switch (dia){
	case 'viernes':
		console.log('buen finde');
		break; 
	case 'lunes':
    	console.log('buena semana');
		break;
	default: 
    	console.log('buen día');
		break;
	}
}