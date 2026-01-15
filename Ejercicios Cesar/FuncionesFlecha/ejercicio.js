/*
Ejercicio: Transformador de Precios (Bucle Manual)

Enunciado: 
Deben convertir una lista de precios en dólares a pesos. 
Deben crear una función flecha que reciba el arreglo y devuelva uno nuevo con 
//los precios multiplicados 
por 20, utilizando un bucle for en su lugar.

*/

let dolares = [1, 5, 6, 20, 100, 120];
let tipoCambio = 20;

for (let i = dolares.length - 1; i >= 0; i--) {
console.log(dolares[i] * tipoCambio);
}
