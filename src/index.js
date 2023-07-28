import './style.css';
import todoTasks from './modules/taskDB';
import {
  buildTask,
  addNewTask,
  handleTaskClick,
  clearCompletedTasks,
} from './modules/addremove';

const listDiv = document.getElementById('list');
const clearBtn = document.getElementById('clear-completed');
const inputField = document.getElementById('newtask');

// Add event listener for the 'keydown' event on the input field
inputField.addEventListener('keydown', (event) => {
  addNewTask(inputField, event, listDiv);
});

// Add event listener for the 'click' event on the clearBtn
clearBtn.addEventListener('click', () => {
  clearCompletedTasks(listDiv); // Call the clearCompletedTasks function
});

// Add event listener for the 'click' event
// on the listDiv (for editing task description or deleting)
listDiv.addEventListener('click', (event) => {
  handleTaskClick(event, listDiv); // Call the handleTaskClick function to handle task clicks
});

// Load data from local storage when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('todoTasks'));
  if (data) {
    todoTasks.length = 0;
    data.forEach((task) => {
      todoTasks.push(task);
    });
  }
  buildTask(listDiv);
});