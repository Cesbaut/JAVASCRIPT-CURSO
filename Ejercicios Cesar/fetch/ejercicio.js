/*Ejercicio: "El Buscador de Usuarios"
Enunciado para los alumnos:
Vas a crear una pequeña aplicación que conecte con una API real para obtener información de usuarios. El objetivo es que, al pulsar un botón, la aplicación solicite los datos y los pinte en pantalla de forma organizada.

Requisitos del ejercicio:

HTML: Crea un botón con el texto "Cargar Usuarios" y un contenedor vacío (<div> o <ul>) donde se mostrarán los resultados.

JS (Fetch): Al hacer clic en el botón, se debe realizar una petición fetch a la API de pruebas: https://jsonplaceholder.typicode.com/users.

Procesamiento:

Valida que la respuesta sea correcta (res.ok).

Transforma la respuesta a JSON.

DOM: Por cada usuario recibido, inserta en el HTML una "tarjeta" que muestre:

El Nombre del usuario (en negrita).

El Email.

La Ciudad (que se encuentra dentro de address.city).

Manejo de errores: Si la API falla, muestra un mensaje de error en color rojo dentro del contenedor.

*/