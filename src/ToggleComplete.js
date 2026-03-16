import { myTodoArray } from "./CreateTodo";
import { displayTodoCards, saveTaskToStorage} from "./uiController";

export function toggleComplete() {
    const toggles = document.querySelectorAll("#toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("change", (e) => {

            const id = e.target.dataset.id;

            const todo = myTodoArray.find(item => item.uuid === id);

            if (todo) {
               todo.completed = !todo.completed;
            } 

            displayTodoCards(myTodoArray);
            saveTaskToStorage(myTodoArray)
        });
    });
}



