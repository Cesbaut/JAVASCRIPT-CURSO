//crear nodos

const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Este es mi cuarto parrafo');

const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Este es mi parrafo cinco'

const elementoPadre = document.querySelector('.padre');


//agregar nodos
//elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
//elementoPadre.appendChild(parrafoCinco);

//usando append
//permite agregar varios nodos a la vez
elementoPadre.append(parrafoCuatro,parrafoCinco, 'Hola Mundo');
