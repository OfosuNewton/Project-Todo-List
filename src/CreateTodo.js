import { format, parseISO } from 'date-fns';
export let myTodoArray = JSON.parse(localStorage.getItem('TasksList')) || [];
export class new_Todo_item {
    constructor(title,description,dueDate,priority,addprojectTo) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.uuid = crypto.randomUUID(),
        this.addprojectTo = addprojectTo,
        this.completed = false;
    }
 
   
}

export function create_new_Todo(title,description,dueDate,priority,addprojectTo,status) {
    const dateString = dueDate;
    const dateObject = parseISO(dateString)
    const formattedDisplay = format(dateObject, 'MMMM do, yyyy');
    const new_Todo = new new_Todo_item(title,description,formattedDisplay,priority,addprojectTo)
    myTodoArray.push(new_Todo);
    console.log(myTodoArray)
    
}



