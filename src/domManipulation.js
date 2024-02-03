import { toDoList, createToDoElement } from "./todoItemCreator";
import { saveData } from "./localStorageHandler";

export function showOnlyCompleted() {
  let toShow = document.querySelectorAll('.todobox');
  toShow.forEach(element => {
    if (!element.classList.contains('todobox-finished')) {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  })};

export function showOnlyActive() {
    let toShow = document.querySelectorAll('.todobox');
    toShow.forEach(element => {
      if (element.classList.contains('todobox-finished')) {
        element.style.display = "none";
      } else {
        element.style.display = "flex";
      }
    })};

export function showAll() {
    let toShow = document.querySelectorAll('.todobox');
    toShow.forEach(element => {
        element.style.display = "flex";
    })};

    export function appendToDoElement(event) {
      event.preventDefault();
      const formContainer = document.querySelector('.form-container');
    
      if (!formContainer.checkValidity()) {
        formContainer.reportValidity();
      } else {
        let ToDoTitle = document.getElementById("title").value;
        let ToDoDue = document.getElementById("due").value;
        let ToDoPriority = document.querySelector('input[name="priority"]:checked').value;
        const newToDo = createToDoElement(ToDoTitle, ToDoDue, ToDoPriority);
        const newToDoDOM = document.createElement("div");
        toDoList.push(newToDo);
        newToDoDOM.setAttribute("todo-unique-identifier", newToDo.uniqueIdentifier);
        newToDoDOM.classList.add('todobox');
        const newLabel = document.createElement("label");
        newLabel.classList.add('container');
    
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", completeOrReinstateElement); 
    
        const span = document.createElement("span");
        span.classList.add('checkmark');
    
        const body = document.body;
        if (body.classList.contains('dark-body')) {
          newToDoDOM.classList.add('todobox-dark');
          span.classList.add('checkmark-dark');
        }
    
        const structure = document.createElement("div");
        const inputtitle = document.createElement("p");
        const inputdate = document.createElement("p");
        const inputpriority = document.createElement("p");
        structure.appendChild(inputtitle);
        structure.appendChild(inputdate);
        structure.appendChild(inputpriority);
        inputtitle.textContent = newToDo.title;
        inputdate.textContent = newToDo.due;
        inputpriority.textContent = newToDo.priority;
    
        const image = document.createElement("div");
        image.classList.add('cross');
        image.addEventListener("click", deleteToDoElement);
    
        newToDoDOM.appendChild(newLabel);
        newLabel.appendChild(checkbox);
        newLabel.appendChild(span);
        newToDoDOM.appendChild(structure);
        newToDoDOM.appendChild(image);
    
        const toDoContent = document.querySelector('.todocontent');
        toDoContent.appendChild(newToDoDOM);
        console.log(toDoList);
        saveData();
        updateRemainingCount();
        closeForm();
      }
    }

    export function deleteToDoElement(event) {
      const image = event.target;
      const parent = image.closest('.todobox');
      let uniqueIdentifier = parent.getAttribute("todo-unique-identifier");
      let index = toDoList.findIndex(item => item.uniqueIdentifier === parseInt(uniqueIdentifier));
          toDoList.splice(index, 1);
          console.log(toDoList);
          saveData();
          updateRemainingCount();
          parent.remove();
     
  }

export function completeOrReinstateElement() {
  const parent = this.parentNode.parentNode;
  parent.classList.toggle('todobox-finished');
  let uniqueIdentifier = parent.getAttribute("todo-unique-identifier");
  let index = toDoList.findIndex(item => item.uniqueIdentifier === parseInt(uniqueIdentifier));
  toDoList[index].checked = !toDoList[index].checked;
  saveData();
  updateRemainingCount();
}

export function deleteAllToDoElements() {
  document.querySelectorAll('.todobox-finished').forEach(function (a) {
      let uniqueIdentifier = a.getAttribute('todo-unique-identifier');
      let index = toDoList.findIndex(item => item.uniqueIdentifier === parseInt(uniqueIdentifier));
          toDoList.splice(index, 1);
          console.log(toDoList);
      a.remove();
  });
  saveData();
  updateRemainingCount();
  console.log(toDoList);
}

export function updateRemainingCount() {
  const remaining = document.querySelector('.remaining');
  remaining.textContent = calculateRemaining() + " " + "items left";
}

function calculateRemaining() {
  let toBeDoneCount = 0;
  toDoList.forEach(element => {
    if (element.checked == false) {
      ++toBeDoneCount;
    }
  });
  return toBeDoneCount;
}

export function renderToDoList() {
}

export function changeSelectedFilterColourAll() {
        all.classList.add('selected');
        active.classList.remove('selected');
        completed.classList.remove('selected');
      };
export function changeSelectedFilterColourActive() {
        active.classList.add('selected');
        all.classList.remove('selected');
        completed.classList.remove('selected');
      } ;
export function changeSelectedFilterColourCompleted() {
        completed.classList.add('selected');
        all.classList.remove('selected');
        active.classList.remove('selected');
      };
export function openForm() {
  const form = document.getElementById("myForm");
  form.style.display = "flex";
}
export function closeForm() {
  const form = document.getElementById("myForm");
  form.style.display = "none";
}
  

