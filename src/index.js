import './style.css';
import todoTasks from './modules/taskDB';
import {
  addTask,
  addNewTask,
  deleteTask,
  toggleEditMode,
  saveToLocalStorage,
} from './modules/addremove';

const listDiv = document.getElementById('list');
const clearBtn = document.getElementById('clear-completed');
const inputField = document.getElementById('newtask');

// Function to build the tasks on the screen
const buildTask = () => {
  listDiv.innerHTML = ''; // Clear existing tasks before building
  todoTasks.forEach((task) => {
    addTask(task.description, task.index, task.completed);
  });
  // Get checkboxes after building the tasks
  const checkboxes = document.querySelectorAll('.check-box');
  // Add event listener for the 'change' event on the checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const index = Number(checkbox.id.split('-')[0]);
      const status = todoTasks[index - 1].completed;
      todoTasks[index - 1].completed = !status;
      saveToLocalStorage();
    });
  });
  saveToLocalStorage();
};

// Add event listener for the 'keydown' event on the input field
inputField.addEventListener('keydown', (event) => {
  addNewTask(inputField, event);
});

// Add event listener for the 'click' event on the clearBtn
clearBtn.addEventListener('click', () => {
  const completedIndexes = todoTasks.reduce((indexes, task, index) => {
    if (task.completed) indexes.push(index);
    return indexes;
  }, []);

  if (completedIndexes.length > 0) {
    deleteTask(completedIndexes);
    buildTask(); // Rebuild the tasks after
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
      buildTask(); // Rebuild the tasks after deleting
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
  buildTask();
});