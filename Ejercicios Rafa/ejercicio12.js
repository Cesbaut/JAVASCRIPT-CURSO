// Utilizando for, a partir de una variable de número mostrar en la consola su tabla de multiplicar hasta el 10. Extra: utilizar el prompt() para determinar el valor del número.
// 4
// 4 x 0 = 0
// 4 x 1 = 4

let numero = prompt("Tabla del...");

console.log(`Tabla del ${numero}`);
for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero*i}`)
};