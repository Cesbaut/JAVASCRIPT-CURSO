// Mostrar un mensaje según una calificación. Calificación 0 a 100. Menor a 60 --> 'reprobado', 60 a 69 --> 'suficiente', 70 a 79 --> 'bien', 80 a 89 --> 'muy bien', 90 a 100 --> 'excelente'. Extra: validar que la calificación sea un número.

let calificacion = 95;

if(typeof calificacion === 'number'){
    if(calificacion >= 90 && calificacion <= 100){
        console.log("Excelente");
    }else if(calificacion >= 80 && calificacion <=89){
        console.log("Muy Bien");
    }else if(calificacion >= 70 && calificacion <=79){
        console.log("Bien");
    }else if(calificacion >= 60 && calificacion <=69){
        console.log("Suficiente");
    }else if(calificacion < 60 && calificacion >=0){
        console.log("Reprobado");
    }else{
        console.log("Error");
    };
}else{
    console.log("Calificación no válida");
};