//crear nodos

const parrafoExtra = document.createElement('p');
const parrafoCero = document.createElement('p');

parrafoCero.innerHTML = 'Este es mi parrafo cero';
parrafoExtra.innerHTML = 'Este es un parrafo extra';
//selecionamos nodo de referencia
const parrafoUno = document.querySelector('p');
const parrafoDos = document.querySelector('#parrafo2')



//parrafo 4
const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Este es mi cuarto parrafo');
//parrafo 5
const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Este es mi parrafo cinco'
//elemento padre
const elementoPadre = document.querySelector('.padre');

//agregar nodos
//elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
//elementoPadre.appendChild(parrafoCinco);

//usando append
//permite agregar varios nodos a la vez
elementoPadre.append(parrafoCuatro,parrafoCinco, 'Hola Mundo');






elementoPadre.insertBefore(parrafoCero, parrafoUno)
elementoPadre.insertAdjacentElement('afterend', parrafoExtra)
//beforebegin - insertar antes del elemento padre
//afterbegin - insertar al inicio del elemento padre
//beforeend - insertar al final del elemento padre
//afterend - insertar despues del elemento padre



//agregar  clases
console.log(parrafoExtra)
// parrafoExtra.setAttribute('class', 'parrafo');
parrafoExtra.classList.add('parrafo');