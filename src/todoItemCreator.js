export let toDoList = [];
export let uniqueValue = 0;

export function createToDoElement(title, due, priority) {
    const newToDo = {
        title: title,
        due: due,
        priority: priority,
        checked: false,
        uniqueIdentifier: uniqueValue++
    };
    return newToDo;
    };
        
            
            
            
            
        
 

