/*
Crea un elemento h3 que contenga el texto "Sección de Contacto". 
Luego, crea un elemento p y asígnale el texto "Escríbenos aquí" usando innerHTML. 
Finalmente, selecciona el elemento padre con la clase .contenedor y agrega ambos elementos 
creados al mismo tiempo usando una sola línea de código.

*/


//crear un elemento h3 que contenga el texto "seccion de contacto" luego crear un elemento p y asignarle el texto " escribiremos aqui" usando innerhtml
//finalmente seleciona el elemento padre con clase .contenedor y agrega ambos elementos creados al mismo tiempo usando una sola linea de codigo

//nodos

const parrafoextra = document.createElement(`h3`)

const texto4 = document.createTextNode(`seccion de contacto`)

const parrafocinco = document.createElement(`p`)

parrafocinco.innerHTML = `escribiremos aqui` 

const elementopadre = document.querySelector(`.contenedor`)

//lementopadre.appendChild(parrafoextra)

/*agregar varios nodos

elementopadre.appendChild(parrafoextra)
parrafoextra.appendChild(texto4)
elementopadre.appendChild(parrafocinco)

*/

elementopadre.append(parrafoextra,parrafocinco,)