import todoTasks from "./taskDB";

const listDiv = document.getElementById('list');
// Function to add a new task to the todoTasks array and display it on the screen
export const addTask = (description, index) => {
    const task = {
      description,
      completed: false,
      index,
    };
  
    todoTasks.push(task);
  
    const singleTask = document.createElement('li');
    singleTask.className = 'single-task';
    singleTask.id = task.description;
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = task.index;
    checkbox.name = task.completed;
  
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

export const addNewTask = (inputField, event) => {
    if (event.key === 'Enter' && inputField.value.trim() !== '') {
      const newTaskDescription = inputField.value.trim();
      const newIndex = todoTasks.length + 1;
  
      addTask(newTaskDescription, newIndex);
      inputField.value = '';
    }
  }

export const removeTask = (taskID) => {
    const index = todoTasks.findIndex((obj) => obj.description === taskID);
    todoTasks.splice(index,1);
  }