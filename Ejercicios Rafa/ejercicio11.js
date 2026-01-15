// Utilizando el do-while, pedir al usuario un número con prompt(). Imprimir el número ingresado. El ciclo debe terminar cuando se ingrese el valor '0'. Nota: no es necesario realizar un incremento a nuestra variable.
let numero;
do {
    numero = prompt("Ingresa un valor");
    console.log(numero)
} while (numero != 0);