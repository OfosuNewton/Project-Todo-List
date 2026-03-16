import { myTodoArray } from "./CreateTodo";
import { projectarray } from "./newProjectFactory";
import { displayTodoCards,initializeNewTodo,saveAll,saveTaskToStorage } from "./uiController";
// export const newTodo = [];
export function del_Todo() {
    const del_btn = document.querySelectorAll('.delete-btn')
    del_btn.forEach(button => {
        button.addEventListener('click',(event) => {
            //Get the Todo's uuid from the clicked button's card
            const TodoIdToDelete = event.target.getAttribute('data-Todo-id');
            console.log(TodoIdToDelete)
            //Find the index of the Todo object in the myTodoarray
            const indexToDelete = myTodoArray.findIndex(Todo => Todo.uuid === TodoIdToDelete )

            if (indexToDelete > -1) {
                //delete the Todo object from the myTodoArray using it's index
                myTodoArray.splice(indexToDelete, 1);
                //Remove the Card from the DOM
                const cardToRemove = event.target.closest('.card');
                if (cardToRemove) {
                    cardToRemove.remove()
                }
                localStorage.setItem('TasksList',JSON.stringify(myTodoArray));
            }     
        })

    
    })
}

export const del_Project = () => {
    let delete_project = document.querySelectorAll(".del-project")
    delete_project.forEach(button => {
        button.addEventListener('click',(event) => {

            //Get the Projects uuid from the clicked button's
             const ProjectIdToDelete = event.target.getAttribute('data-Project-id');
            //Find the index of the project object in the project array
            const indexToDelete = projectarray.findIndex(project => project.Projectuuid === ProjectIdToDelete )
            if (indexToDelete > -1) {
                
                const projectTitle = projectarray[indexToDelete].project_title;
                console.log(projectTitle)
                projectarray.splice(indexToDelete, 1);
                localStorage.setItem('ProjectList',JSON.stringify(projectarray));
                //Deleting from local storage by looping
               for (let i = myTodoArray.length - 1; i>=0 ;i--) {
                if (myTodoArray[i].addprojectTo === projectTitle) {
                    myTodoArray.splice(i,1);
                }

              //Remove the project from the DOM
                const ProjectToRemove = event.currentTarget.closest('.tab');
                if (ProjectToRemove) {
                    ProjectToRemove.remove()
                }
                saveTaskToStorage(myTodoArray);
                 displayTodoCards(myTodoArray);
               }              
        }
    
    })
}
)}
