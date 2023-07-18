import './style.css';

const todoTasks = [
  {
    description: 'Read the documentation',
    completed: false,
    index: 1,
  },
  {
    description: 'Create the Repository',
    completed: false,
    index: 2,
  },
  {
    description: 'Set the Linters',
    completed: false,
    index: 3,
  },
];

const listDiv = document.getElementById('list');

// Function to add a new task to the todoTasks array and display it on the screen
const addTask = (description, index) => {
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
  listDiv.appendChild(singleTask);
};

// Display the initial tasks on the screen
todoTasks.forEach((task) => {
  addTask(task.description, task.index);
});

// Add event listener for the 'keydown' event on the input field
const inputField = document.getElementById('newtask');
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && inputField.value.trim() !== '') {
    const newTaskDescription = inputField.value.trim();
    const newIndex = todoTasks.length + 1;

    addTask(newTaskDescription, newIndex);
    inputField.value = '';
  }
});
