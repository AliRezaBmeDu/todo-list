// addremove.js

import todoTasks from './taskDB';

// const listDiv = document.getElementById('list');
// const LOCAL_STORAGE_KEY = 'todoTasks';

export const saveToLocalStorage = () => {
  const LOCAL_STORAGE_KEY = 'todoTasks';
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoTasks));
};

export const addTask = (detail, idx, status, listDiv) => {
  const task = {
    description: detail,
    completed: status,
    index: idx,
  };

  const singleTask = document.createElement('li');
  singleTask.className = 'single-task';
  singleTask.id = `${task.description}-${task.index}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `${task.index}-checkbox`;
  checkbox.name = 'checkbox';
  checkbox.className = 'check-box';
  if (status) {
    checkbox.checked = true;
  }
  const taskDescription = document.createElement('p');
  taskDescription.innerText = task.description;

  singleTask.appendChild(checkbox);
  singleTask.appendChild(taskDescription);

  const threeDotIcon = document.createElement('i');
  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');
  threeDotIcon.classList.add(`${task.index}-threedot`);
  singleTask.appendChild(threeDotIcon);
  listDiv.appendChild(singleTask);
};

export const addNewTask = (inputField, event, listDiv) => {
  if (event.key === 'Enter' && inputField.value.trim() !== '') {
    // Intentionally left blank
  } else {
    console.log('event.key check');
    return;
  }

  // --------------------//
  const detail = inputField.value.trim();
  const status = false;
  const idx = todoTasks.length + 1;
  const task = {
    description: detail,
    completed: status,
    index: idx,
  };

  const singleTask = document.createElement('li');
  singleTask.className = 'single-task';
  singleTask.id = `${task.description}-${task.index}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `${task.index}-checkbox`;
  checkbox.name = 'checkbox';
  checkbox.className = 'check-box';
  if (status) {
    checkbox.checked = true;
  }
  const taskDescription = document.createElement('p');
  taskDescription.innerText = task.description;

  singleTask.appendChild(checkbox);
  singleTask.appendChild(taskDescription);

  const threeDotIcon = document.createElement('i');
  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');
  threeDotIcon.classList.add(`${task.index}-threedot`);
  singleTask.appendChild(threeDotIcon);
  listDiv.appendChild(singleTask);

  // --------------------//
  const newTask = {
    description: detail,
    completed: false,
    index: idx,
  };
  todoTasks.push(newTask);
  inputField.value = '';
  saveToLocalStorage();
};

// Function to build the tasks on the screen
export const buildTask = (listDiv) => {
  listDiv.innerHTML = ''; // Clear existing tasks before building
  todoTasks.forEach((task) => {
    addTask(task.description, task.index, task.completed, listDiv);
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
    saveToLocalStorage();
  });
  saveToLocalStorage();
};

export const deleteTask = (indexes, listDiv) => {
  // Sort indexes in descending order
  indexes.sort((a, b) => b - a);

  indexes.forEach((index) => {
    todoTasks.splice(index, 1);
  });
  // Update indexes of remaining tasks
  for (let i = 0; i < todoTasks.length; i += 1) {
    todoTasks[i].index = i + 1;
  }

  saveToLocalStorage();
  buildTask(listDiv);
};

export const toggleViewMode = (taskElement, index, description) => {
  const deleteIcon = taskElement.querySelector('.delete-icon');
  const threeDotIcon = document.createElement('i');
  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');
  threeDotIcon.setAttribute('data-action', 'edit');

  const inputField = taskElement.querySelector('.edit-input');
  inputField.remove(); // Remove the input field

  const taskDescription = document.createElement('p');
  taskDescription.innerText = description;
  taskElement.appendChild(taskDescription); // Add back the task description

  deleteIcon.remove(); // Remove the delete icon
  taskElement.appendChild(threeDotIcon); // Add the three-dot icon

  // Update the task description in the todoTasks array
  todoTasks[index - 1].description = description;
  saveToLocalStorage();
};

export const editTaskDescription = (index, newDescription) => {
  todoTasks[index - 1].description = newDescription;
  saveToLocalStorage();
};

export const toggleEditMode = (taskElement, index) => {
  const threeDotIcon = taskElement.querySelector('.dot-icon');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
  deleteIcon.setAttribute('data-action', 'delete');

  const taskDescription = taskElement.querySelector('p');
  const currentDescription = taskDescription.innerText;

  taskDescription.remove(); // Remove the task description
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.className = 'edit-input';
  inputField.value = currentDescription;
  taskElement.appendChild(inputField); // Add the input field

  threeDotIcon.remove(); // Remove the three-dot icon
  taskElement.appendChild(deleteIcon); // Add the delete icon

  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && inputField.value.trim() !== '') {
      const newDescription = inputField.value.trim();
      editTaskDescription(index, newDescription);
      toggleViewMode(taskElement, index, newDescription); // Toggle back to view mode
    }
  });
};
