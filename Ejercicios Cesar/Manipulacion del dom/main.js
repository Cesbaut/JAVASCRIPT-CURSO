//Seleccionar elementos del DOM


//Por ID
let elementoporID = document.getElementById('parrafo1')
elementoporID.innerHTML= 'HOLAAA'

//Por nombre de la clase
let elementosporClase = document.getElementsByClassName('parrafo')
elementosporClase[1].innerHTML = 'Hola desde clase'
console.log(elementosporClase.length)
console.log(elementosporClase)

//Por etiqueta
let elementosporEtiqueta = document.getElementsByTagName('p')
console.log(elementosporEtiqueta)
elementosporEtiqueta[2].innerHTML = 'Hola desde etiqueta'


// Modificando estilos
elementoporID.style.background = 'black'
elementoporID.style.color = 'white'
elementoporID.style.padding = '10px'
elementoporID.style.width= '250px'
elementoporID.style.textAlign= 'center'