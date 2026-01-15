//ELIMINACION DE NODOS

//Seleccionado el elemento padre
const elementoPadre = document.querySelector('.padre');

//Creando el nodo hijo
const parrafoCuatro = document.createElement('p');
parrafoCuatro.innerHTML = 'Parrafo4';



const parrafoUno = document.querySelector('#parrafo1');
const parrafoDos = document.querySelector('#parrafo2');
const parrafoTres = document.querySelector('#parrafo3');

//Eliminamos un nodo hijo
elementoPadre.removeChild(parrafoUno)

//Remove
parrafoDos.remove()


//Reemplazar un nodo hijo
elementoPadre.replaceChild(parrafoCuatro, parrafoTres) //el elemento nuevo y luego el elemento a reemplazar