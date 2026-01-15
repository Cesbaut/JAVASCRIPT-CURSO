// Crear 3 objetos con al menos 4 propiedades. Agregar una propiedad al primero, modificar una propiedad del segundo, eliminar una propiedad del tercero.

const carro = {
    marca: 'honda',
    modelo: 'civic',
    color: 'verde',
    puertas: 2,
};

const persona = {
    nombre: 'Juan',
    edad: 25,
    estatura: 1.75,
    profesion: 'carpintero',
};

const mesa = {
    madera: 'roble',
    altura: '1.3m',
    ancho: '2m',
    largo: '1m',
}

console.log(carro);
console.log(persona);
console.log(mesa);

console.log("==================");
carro.kilometraje = 250000;
persona.profesion = 'bombero';
delete mesa.madera;

console.log(carro);
console.log(persona);
console.log(mesa);