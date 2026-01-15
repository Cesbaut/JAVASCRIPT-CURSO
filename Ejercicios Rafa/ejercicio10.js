// Utilizando while, imprimir los valores en orden descendente a partir de 10. si el valor es 3 o 5 que no se imprima. Si llega a 2 que se finalice el ciclo.

let numero = 10;

while (numero >= 0) {
    numero--
    if (numero == 3 || numero == 5) {
        continue;
    } else if(numero == 2){
        break;
    }
    console.log(numero);
}