// switch evaluando con un número, hacer 4 cases y default

let numero = 2;

switch (numero) {
    case 1:
        console.log(`Tengo ${numero} perro`);
        break;
    case 2:
        console.log(`Me comí ${numero} tamales`);
        break;
    case 3:
        console.log(`Aprendí la tabla del ${numero}`);
        break;
    case 4:
        console.log(`Crazy ${numero} you`);
        break;
    default:
        console.log("Opción no válida.");
        break;
}