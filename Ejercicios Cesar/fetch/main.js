//FETCH

fetch('https://dummyjson.com/products')//iniciar la peticion
    .then(hola =>{ //then traera la respuesta
        console.log(hola)
        if(!hola.ok){
            console.log('Error en la peticion');
        }
        return hola.json() //convertir la respuesta a json
    })
    .then(data=>{
        console.log(data)

        const contenedor = document.getElementById('lista-productos');
        contenedor.innerHTML= data.products.map(prodcuto => `
                <li>
                    <img src="${prodcuto.images[0]}"/>
                    <strong>${prodcuto.title}</strong> - $${prodcuto.price}
                </li>
            `).join('');

    })
    .catch(error =>{
        console.log('Error en la peticion', error);
    })
    .finally(()=>{
        console.log('Peticion finalizada');
    })