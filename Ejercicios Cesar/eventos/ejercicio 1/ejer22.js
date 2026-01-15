const conten = document.getElementById('conten')

const boton = document.createElement('button')

boton.textContent = 'alerta';

boton.classList.add('peligro');
conten.appendChild(boton)

boton.addEventListener('click', () => {
console.log('se apachurro')
});
