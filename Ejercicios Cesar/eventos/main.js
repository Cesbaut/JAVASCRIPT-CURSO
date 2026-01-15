//EVENTOS

//Seleccionamos elementos
let boton = document.querySelector('#saludoBtn');
let inputTexto = document.getElementById('userInput');

//nuestra funcion
function mostrarAlerta(event){
    console.log(event.key=='Enter')
    event.target.style.backgroundColor = 'red';
    console.log(event)
    console.log(event.target.value='hsfkshdjf')
}

//asignamos el evento al boton
boton.addEventListener( 'click' , mostrarAlerta );

//Cuando se escribe en el input desabilita el evento,
//es decir, ya no se puede usar el evento de arriba
inputTexto.addEventListener('keypress' ,mostrarAlerta)


//click - ejecuta el evento al hacer click en el boton
//dblclick - ejecutar el evento al hacer doble click en el boton
//contextmenu - ejecutar el evento al hacer click derecho en el boton
//mouseover - ejecutar el evento al pasar el mouse por encima del boton
//input - ejecutar el evento al escribir en un input
//keypress - cuando se presiona una tecla