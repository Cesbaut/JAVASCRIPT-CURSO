
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
                <img src="icons8-borrar-para-siempre-32.png" class="closeBtn>
            </label>
        </div>
    `
    textArea.value='';


}

list.addEventListener('click', (evento)=>{
    console.log(evento)
    if(evento.srcElement.nodeName =='INPUT'){
        updateStats();
    
    }
    else if(event.srcElement.nodeName =='IMG'){
        deleteTask(event.srcElement.parentNode.id)
    }
})