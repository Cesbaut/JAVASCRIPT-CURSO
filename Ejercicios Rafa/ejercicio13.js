// Crear una función que reciba 2 parámetros: precio y cantidad. Y que devuelva el total. Extra: agregar un tercer parámetro opcional que indique un descuento.

function calcularTotal(precio, cantidad, descuento = 0){
    let subtotal = precio*cantidad;
    let total = subtotal - (subtotal*descuento/100);
    return total;
}

console.log("Total a pagar: $" +  calcularTotal(17,6,8));