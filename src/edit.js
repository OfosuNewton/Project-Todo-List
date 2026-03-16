import { compareDesc } from "date-fns";
import { myTodoArray  } from "./CreateTodo";
import { displayTodoCards,saveTaskToStorage } from "./uiController";


const displaymodal = document.querySelector('[data-edit-modal]');
const titleInput = document.querySelector('#edit-todo-title');
const descInput = document.querySelector('#edit-todo-description');
const dateInput = document.querySelector('#edit-todo-date');
const priorityInput = document.querySelector('#edit-todo-priority')

export const edit_Todo = function() {            
    //We use delegation; Listen to the body or a specific list container
    document.addEventListener('click', (event) => {
        //check if the clicked element is an edit button
        const btn = event.target.closest('.edit-btn');
        if (!btn) return;
        const TodoIdToEdit = btn.getAttribute('data-Todo-id');
        const todoToEdit = myTodoArray.find(todo => todo.uuid === TodoIdToEdit);
  
            if (todoToEdit) {
               //Fill the modal inputs with current data
                titleInput.value = todoToEdit.title;
                descInput.value = todoToEdit.description;
                dateInput.value = todoToEdit.Date;
                priorityInput.value = todoToEdit.priority;
                displaymodal.setAttribute('data-currently-editing', TodoIdToEdit)
                displaymodal.showModal()
                
            }
        
     save_edit()
    })
 
    
}

export const save_edit = function () {
        const content_container = document.querySelector('.content')

    document.addEventListener('click',(event) => {
        //check if the clicked element is a save btn
        const sav_btn = event.target.closest('.save-btn');
        
        if (!sav_btn) return
        console.log('hello am working ')
        const currentId = displaymodal.getAttribute('data-currently-editing');
        const todoIndex = myTodoArray.findIndex(t => t.uuid === currentId)

        if (todoIndex > -1) {
            //Update the actual data in the array
            
            console.log(myTodoArray[todoIndex].dueDate)
            myTodoArray[todoIndex].title = titleInput.value
            myTodoArray[todoIndex].dueDate = dateInput.value
            myTodoArray[todoIndex].description = descInput.value
            myTodoArray[todoIndex].priority = priorityInput.value


            console.log(myTodoArray)
            saveTaskToStorage(myTodoArray);
            displayTodoCards(myTodoArray)
        }
    })
}

