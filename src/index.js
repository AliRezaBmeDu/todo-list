import './style.css';
import todoTasks from './modules/taskDB';
import { addTask, addNewTask, removeTask } from './modules/addremove';

// Display the tasks on the screen
const buildTask = () => {
  todoTasks.forEach((task) => {
    addTask(task.description, task.index);
  });
}

// Add event listener for the 'keydown' event on the input field
const inputField = document.getElementById('newtask');
inputField.addEventListener('keydown', addNewTask(inputField, Event));

const clearBtn = document.getElementById('clear-completed');
clearBtn.addEventListener('click', () => {
  
})

buildTask();