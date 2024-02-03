import { appendToDoElement, deleteAllToDoElements, showOnlyCompleted, showOnlyActive, showAll, 
    changeSelectedFilterColourAll, changeSelectedFilterColourActive, changeSelectedFilterColourCompleted,
openForm, closeForm } from './domManipulation';
import { lightDarkToggle } from './lightDarkModeSwitcher';

export function initializeEventListeners() {
    const clearCompleted = document.querySelector('.clearCompleted').addEventListener("click", deleteAllToDoElements);
    const submit = document.querySelector('.submit');
    submit.addEventListener("click", appendToDoElement);
    const completed = document.getElementById("completed");
    completed.addEventListener("click", showOnlyCompleted);
    completed.addEventListener("click", changeSelectedFilterColourCompleted);
    const all = document.getElementById("all");
    all.addEventListener("click", showAll);
    all.addEventListener("click", changeSelectedFilterColourAll);
    const active = document.getElementById("active");
    active.addEventListener("click", showOnlyActive);
    active.addEventListener("click", changeSelectedFilterColourActive);
    const switcher = document.querySelector('.modeswitch').addEventListener("click", lightDarkToggle);
    const create = document.querySelector('.todoheader').addEventListener("click", openForm);
    const close = document.querySelector('.cancel').addEventListener("click", closeForm);
    

};

