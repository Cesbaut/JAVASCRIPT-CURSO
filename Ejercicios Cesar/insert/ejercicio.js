/*
Crea un elemento p que diga "Inicio" y otro que diga "Final". 
Selecciona el elemento padre con la clase .contenedor y el párrafo de referencia con el ID #parrafo2. 
Inserta el párrafo "Inicio" antes de la referencia e inserta el párrafo "Final" al final del contenedor. 
Por último, añade la clase "texto-azul" al párrafo "Final".
*/

const pInicio = document.createElement('p');
pInicio.innerHTML = 'Inicio';

const pFinal = document.createElement('p');
pFinal.innerHTML = 'Final';

const padre = document.querySelector('.contenedor');
const referencia = document.querySelector('#parrafo2');

padre.insertBefore(pInicio, referencia);
padre.append(pFinal);

pFinal.classList.add('texto-azul');