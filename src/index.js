import './styles.css'
import { lightdark } from './lightDarkModeSwitcher';
import { toDoList } from './todoItemCreator';
import { createToDo } from './todoItemCreator';

import { initializeEventListeners } from './eventListeners';
import { loadSavedData } from './localStorageHandler';

document.addEventListener('DOMContentLoaded', function () {
  initializeEventListeners();
  loadSavedData();
});





  
      

  
  









