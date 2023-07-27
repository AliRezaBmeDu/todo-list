import './style.css';
import todoTasks from './modules/taskDB';
import {
  buildTask,
  addNewTask,
  deleteTask,
  toggleEditMode,
  saveToLocalStorage,
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
  const completedIndexes = todoTasks.reduce((indexes, task, index) => {
    if (task.completed) indexes.push(index);
    return indexes;
  }, []);

  if (completedIndexes.length > 0) {
    deleteTask(completedIndexes);
    buildTask(listDiv); // Rebuild the tasks after
    // deleting completed tasks
  }
});

// Add event listener for the 'click' event
// on the listDiv (for editing task description or deleting)
listDiv.addEventListener('click', (event) => {
  const { target } = event;
  const taskElement = target.closest('.single-task');

  if (!taskElement) return; // Exit if the clicked element is not a task

  const index = Number(taskElement.id.split('-')[1]);

  if (target.classList.contains('dot-icon') || target.classList.contains('delete-icon')) {
    const dataAction = target.getAttribute('data-action');
    if (dataAction === 'edit') {
      toggleEditMode(taskElement, index);
    } else if (dataAction === 'delete') {
      deleteTask([index - 1]); // Use deleteTask function to remove the task
      buildTask(listDiv); // Rebuild the tasks after deleting
    }
  } else if (target.tagName === 'P') {
    toggleEditMode(taskElement, index); // Toggle to edit mode when the task description is clicked
  }
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