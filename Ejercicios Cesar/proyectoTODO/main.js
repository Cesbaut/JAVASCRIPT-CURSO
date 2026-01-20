
let IdCounter=0;
const textArea = document.querySelector('#textArea')

let userInput= document.getElementById('userInput');

userInput.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    addTask();
})

let list = document.getElementById('list')

let addTask = () =>{
    IdCounter++;

    let newValue = textArea.value;

    list.innerHTML +=  `
        <div class="task-container" id="${IdCounter}">
            <label>
                <input type="checkbox">
                <p>${newValue}</p>
            </label>
            <img src="icons8-borrar-para-siempre-32.png" class="closeBtn">
        </div>
    `
    textArea.value='';

    updateStats();
}

list.addEventListener('click',(event)=>{
    if(event.srcElement.nodeName === 'INPUT'){
        updateStats();
    }
    else if(event.srcElement.nodeName === 'IMG'){
        deleteTask(event.srcElement.parentNode.id)
    }
})


// crear la funcion updateStats
// debes declarar todos los hijos div del elemento list
// declarar todos los input checkbox checkeados dentro del elemento list
// declarar el elemento stats
// dentro de stats imprimir las tareas pendiente y las completadas

function updateStats(){
    let hijosList = document.querySelectorAll('.task-container')
    let tareasPend = hijosList.length;
    let TCompletas = list.querySelectorAll('input[type=checkbox]:checked')
    let tareasCom = TCompletas.length;
    tareasPend = tareasPend - tareasCom;

    let stats = document.getElementById('stats')
    stats.innerHTML = `<p>Tarea pendientes: ${tareasPend}   Completadas: ${tareasCom}</p>`
}


//crear la funcion deleteTask
// debe recibir como parametro el id de la tarea a eliminar
// leer el div del id a eliminar 
//eliminar el div del elemento list
// actualizar el stats
let deleteTask = (id) => {
    let idTareaToDelete = document.getElementById(id);
    //selecciona el elemento padre
    list.removeChild(idTareaToDelete)
    updateStats();
};