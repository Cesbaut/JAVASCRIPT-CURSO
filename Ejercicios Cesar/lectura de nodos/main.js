//lectura de nodos

//por id
let elementoPorID = document.querySelector('#parrafo1')
elementoPorID.innerHTML = 'Texto modificado por ID'
console.log(elementoPorID)

//por clase
let elementosPorClase = document.querySelectorAll('.parrafo')
console.log(elementosPorClase)
let arreglos = [...elementosPorClase];
console.log(arreglos)
arreglos[1].innerHTML = 'Texto modificado por clase'

//por etiqueta
let elementosPorEtiqueta = document.querySelectorAll('p')
elementosPorEtiqueta[2].innerHTML = 'Texto modificado por etiqueta'