import { toDoList, uniqueValue } from "./todoItemCreator";
import { completeOrReinstateElement } from "./domManipulation";
import { deleteToDoElement } from "./domManipulation";
import { updateRemainingCount } from "./domManipulation";
import { lightDarkToggle } from "./lightDarkModeSwitcher";


export function saveData() {
    localStorage.setItem('savedToDos', JSON.stringify(toDoList));
    localStorage.setItem('savedUniqueValue', JSON.stringify(uniqueValue));
    let body = document.body;
    if (body.classList.contains("dark-body")) {
      localStorage.setItem('lightOrDark', "dark");
    } else {
      localStorage.setItem('lightOrDark', "light")
    }
  }

  export function loadSavedData() {
    const storedTodos = localStorage.getItem('savedToDos');
    if (storedTodos) {
        toDoList = JSON.parse(storedTodos);
        toDoList = toDoList.filter(element => element.priority !== undefined);
        renderSavedData();
    }
    const storedUniqueValue = localStorage.getItem('savedUniqueValue');
    if (storedUniqueValue) {
      uniqueValue = JSON.parse(storedUniqueValue);
    }
    const storedLightOrDarkValue = localStorage.getItem('lightOrDark');
    if (storedLightOrDarkValue == "dark") {
      lightDarkToggle();
    }

}

export function renderSavedData() {
  const toDoContent = document.querySelector('.todocontent');
  toDoList.forEach((element) => {
      const newToDoDOM = document.createElement("div");
      newToDoDOM.setAttribute("todo-unique-identifier", element.uniqueIdentifier);
      newToDoDOM.classList.add('todobox');

      const newLabel = document.createElement("label");
      newLabel.classList.add('container');

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = element.checked;
      checkbox.addEventListener("click", completeOrReinstateElement);

      const span = document.createElement("span");
      span.classList.add('checkmark');

      const structure = document.createElement("div");
      const inputtitle = document.createElement("p");
      const inputdate = document.createElement("p");
      const inputpriority = document.createElement("p");
      structure.appendChild(inputtitle);
      structure.appendChild(inputdate);
      structure.appendChild(inputpriority);
      inputtitle.textContent = element.title;
      inputdate.textContent = element.due;
      inputpriority.textContent = element.priority;

      const image = document.createElement("div");
      image.classList.add('cross');
      image.addEventListener("click", deleteToDoElement);

      newToDoDOM.appendChild(newLabel);
      newLabel.appendChild(checkbox);
      newLabel.appendChild(span);
      newToDoDOM.appendChild(structure);
      newToDoDOM.appendChild(image);
      if (element.checked) {
          newToDoDOM.classList.add('todobox-finished');
      }
      toDoContent.appendChild(newToDoDOM);
  });
  updateRemainingCount();
}