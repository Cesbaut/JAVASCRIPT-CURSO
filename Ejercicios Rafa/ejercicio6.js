
// Crear 3 expresiones con el operador ternario y mostrar el resultado

let encendido = true;
let valor1 = 5;
let valor2 = 10;

let carro = (encendido) ? "Bruuum" : "No avanza";
let mayor = valor1 > valor2 ? `${valor1} es mayor  que ${valor2}` : `${valor2} es mayor que ${valor1}`;
let operacion = (10 < 20) ? 10 + 5 : 20 - 10;

console.log(carro);
console.log(mayor);
console.log(operacion);
