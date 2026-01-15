
console.log(Saludar('Cesar'));

//FUNCION CLASICA
function Saludar(nombre){
    return `Hola ${nombre}`;
}
//HOISTING - Se puede acceder a la funcion en cualquier parte del codigo


//FUNCION ANONIMA
//Se declara con una variable y su funcion no tiene nombre
//NO TIENE HOSTING
let saludo = function(nombre){
    return `Hola ${nombre}`;
}
console.log(saludo('Cesar2'));



//FUNCIONES FLECHA  ()=>{}
//Igualan a una variable, es decir, es una funcion anonima
//no requiere un return si es de una sola linea
let saludoFlecha = (nombre)  =>{
    return `Hola ${nombre}`
};
let saludoFlecha2 = nombre => `Hola ${nombre}`;
let suma = (a,b)=> a + b;
let obj = () => ({nombre:'bob', edad:20});//entre parentesis si hay un objeto

console.log(obj());
console.log(suma(2,5));
console.log(saludoFlecha('Cesar3'));
console.log(saludoFlecha2('Cesar4'));