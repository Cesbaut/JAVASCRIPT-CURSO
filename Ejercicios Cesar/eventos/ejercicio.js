/* 

Selecciona un campo de entrada con el id cajaTexto y un 
contenedor con la clase .pizarra. 
Programa la siguiente funcionalidad:

Cuando el usuario presione la tecla "Enter" en el input, 
crea un nuevo párrafo (p), 
asígnale el valor que escribió el usuario y agrégalo al contenedor.

Al párrafo recién creado, agrégale un evento para que, cuando 
el usuario haga doble 
clic (dblclick) sobre él, el párrafo cambie su color de
 fondo a negro y su letra a blanco.
  

*/

// Selecciona el input y el contenedor correctamente
const input = document.getElementById('cajaTexto');
const contenedor = document.getElementById('contenedorparrafos');


input.addEventListener('keypress', (evento) => {
if (evento.key == 'Enter') {
//evento.preventDefault(); 

const parrafoNuevo = document.createElement(`p`);

const textoEscrito = document.createTextNode(evento.target.value);

parrafoNuevo.appendChild(textoEscrito);
// contenedor.body.appendChild(parrafoNuevo)
contenedor.appendChild(parrafoNuevo)


}
});

function mostraralerta(evento) {
console.log(`Doble clic detectado`) 
evento.target.style.backgroundColor = `black`
}

// boton.addEventListener(`dblclick`, mostraralerta)