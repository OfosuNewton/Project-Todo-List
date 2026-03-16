const similarElement = [];
import { create_new_Todo, myTodoArray } from "./CreateTodo";
import { build_new_project, projectarray  } from "./newProjectFactory";
import { del_Todo, del_Project } from "./delete_Todo";
import { edit_Todo } from "./edit";
import { toggleComplete } from "./ToggleComplete";

function getTodoDOMElements() {
    return {
        New_Todo_btn: document.querySelector('#createNewTodo'),
        modal: document.querySelector('[data-Todo-modal]'),
        addTodo: document.querySelector('.add-new-todo-btn'),
        content_container: document.querySelector('.content'),
        button: document.querySelector("[data-open-modal]"),
        new_Todo_modal: document.querySelector('[data-modal]'),
        add_new_btn: document.querySelector('.perform-click-operation'),
        project_title: document.querySelector('#title'),
        project: document.querySelector('#projects'),
        menu_item: document.querySelector('.menu'),
        Todo_title: document.querySelector('#todo-title'),
        Todo_description: document.querySelector('#description'),
        Todo_date: document.querySelector('#date'),
        Todo_priority: document.querySelector('#priority'),
        select_project: document.querySelector('#choose-project'),
        option_element: document.querySelector('.option')
        

    }
}

// Creating a  Point of Entry for saving to ls.
export function saveProjectToStorage(projectarray) {
    localStorage.setItem('ProjectList', JSON.stringify(projectarray))
};

export function saveTaskToStorage(Task) {
    localStorage.setItem('TasksList',JSON.stringify(Task));
}

// Setting up functionalities to open modals
function setNewTodoFunctionality(elements) {
    const { New_Todo_btn , modal , button, new_Todo_modal, add_new_btn, addTodo} = elements;
    if (New_Todo_btn && modal && button && add_new_btn && new_Todo_modal) {
        New_Todo_btn.addEventListener('click',() => {
            modal.showModal(); //displaying the actual todo modal
       
        }),

        // showing the add project modal
        button.addEventListener('click',() => {
            new_Todo_modal.showModal();
        })
    }
       
};

//calling buildProjectFactory
function create_newProject(elements) {
    const {  project_title, add_new_btn, } = elements;
    add_new_btn.addEventListener('click',() => {
        build_new_project(project_title.value);
        renderProject(elements,projectarray[projectarray.length - 1])
        saveProjectToStorage(projectarray);
        del_Project();
    });
}

//Initializing a new project
export function initializeNewProject() {
    const elements = getTodoDOMElements();
    create_newProject(elements);
    
};

//Rendering projects on sidebar and on card element
function renderProject(element, item) {
    const { menu_item,select_project } = element;
    let tab = document.createElement('a');
    tab.classList.add('tab')
    tab.innerHTML = `
        <li id="projectid" class="projects">${item.project_title}</li>
        <button class="del-project" data-Project-id="${item.Projectuuid}">X</i></button>
    `
    // <i class="fa-solid fa-trash">
    menu_item.appendChild(tab);
    renderSidebarElement(item,select_project)
    page_about()
}
    // rendering sidebar element on card
    function renderSidebarElement(item,select_project) {
         const createdProject = document.createElement('option');
        createdProject.classList.add('options');
        createdProject.innerHTML = `
        ${item.project_title}
    `
    select_project.appendChild(createdProject);
    console.log(`${item.project_title} has been created`);
    }
   
// Initializing Todo modal
export function initializeTodoModal() {
    const elements = getTodoDOMElements();
    setNewTodoFunctionality(elements);
}


//Calling Create new Todo to create a new instance
function callNewTodoInstance(element) {
    const { addTodo, Todo_date, Todo_title, Todo_description, Todo_priority, select_project} = element;
    addTodo.addEventListener('click',() => {
        create_new_Todo(Todo_title.value,Todo_description.value,Todo_date.value,Todo_priority.value,select_project.value);
        // saveTasks(myTodoArray)
        saveTaskToStorage(myTodoArray);
        initializeRenderTodo();
        all_Todos();
    });
}

//Initializing the new created Todo
export function initializeNewTodo() {
    const elements = getTodoDOMElements()
    callNewTodoInstance(elements);
}

// displaying Todos
 function renderTodos(elements) {
    displayTodoCards(myTodoArray)
}

 

// initialize renderTodo
function initializeRenderTodo() {
    const elements = getTodoDOMElements();
    renderTodos(elements);
   getSidebarElements()
}


export function getSidebarElements() {
    const select_project = document.querySelectorAll('#projectid');
    const content = document.querySelector('.content');
    select_project.forEach(button => {
        button.addEventListener('click',(event) => {
            content.innerHTML = ""
            const element = event.target.textContent;
            const similarElement = myTodoArray.filter(item => item.addprojectTo === element)
            displayTodoCards(similarElement)
        })
    })
}


// The magic behind toggled sidebar name && page name just above
export function page_about() {
    const page_info = document.querySelector('.descriptor');
    const select_project = document.querySelectorAll('.projects')
    select_project.forEach(button => {
    button.addEventListener('click',(event) => {
            page_info.textContent = event.target.textContent
            let current_Location = event.target.textContent
            console.log(`We are in ${current_Location}`)
        })
    })
   
}


// Displaying all created Todos
function all_Todos() {
  const AllTodo = document.querySelector('.all-todos');
  AllTodo.addEventListener('click',() => {
    console.log(myTodoArray)
    displayTodoCards(myTodoArray);
  });
};


// Main Engine room room for rendering Todos which takes in a Todo Array
export function displayTodoCards(todoArrayToDisplay) {
    const { content_container } = getTodoDOMElements()
    const initialStatus = "incomplete";
    content_container.innerHTML = ""; //Clear existing cards

    todoArrayToDisplay.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card');

        if (item.completed) {
            card.classList.add('completed-card');
        }
        card.innerHTML = `
            <div class='title' id="card-title"><div id="card-label">Title:</div> <div>${item.title}</div></div>
            <div class="description"><div id="card-label">Description:</div> <div> ${item.description}</div></div>
            <div class="date"><div id="card-label">Date:</div> <div>${item.dueDate}</div></div>
            <div class="priority"><div id="card-label">priority:</div> <div>${item.priority}</div></div>
            <div id="appendProjectTo"><div id="card-label">project:</div> <div>${item.addprojectTo}</div></div>
            
            <div class="stat"><div id="card-label">Status:</div> <input type="checkbox" id="toggle" data-id="${item.uuid}" ${item.completed ? "checked" : ""}></input></div>
            <div class="initial-status" id="card-labe">${item.completed ? "Completed" : "Incompleted"} </div>
            <div id="card-btns">
            <button class="edit-btn" data-Todo-id="${item.uuid}"> Edit <i class="fa-solid fa-file-pen"></i></button>
            <button class="delete-btn" data-Todo-id="${item.uuid}">Delete <i class="fa-solid fa-trash-can"> </i></button>
            </div>
        `;
      
        content_container.appendChild(card);
        });
    del_Todo()
    edit_Todo();
    toggleComplete()

}
const sidebar = document.querySelector('.sidebar');
if (sidebar.offsetWidth <=240) {
    sidebar.classList.add('collapsed');
}

//The manager
export function initApp() {
    const elements = getTodoDOMElements();
    initializeTodoModal();
    initializeNewTodo();
    initializeNewProject();
    projectarray.forEach(project => {
        renderProject(elements, project)
    })
    del_Project();
    displayTodoCards(myTodoArray)
    getSidebarElements();
    all_Todos();
   
    
}


