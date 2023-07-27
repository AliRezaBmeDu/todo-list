// edit.test.js

import {
    addNewTask,
    editTaskDescription,
    buildTask,
    updateCompletedStatus,
    clearCompletedTasks,
  } from './src/modules/addremove';
  import { mockLocalStorage, mockElement } from './mocks';

  Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });
  
  describe('editTaskDescription function', () => {
    beforeEach(() => {
      // Reset localStorage and the virtual DOM before each test
      localStorage.clear();
      document.body.innerHTML = mockElement().innerHTML;
    });
    console.log('initial number of tasks: '+listDiv.childElementCount);
  
    test('edits the task description correctly', () => {
      // Add a task to the list
      const inputField = document.getElementById('newtask');
      const event = { key: 'Enter' };
      inputField.value = 'Test Task';
      const listDiv = document.getElementById('list');
      addNewTask(inputField, event, document.getElementById('list'));
  
      // Get the task element from the list
      const taskElement = document.querySelector('.single-task');
      const index = Number(taskElement.id.split('-')[1]);
      console.log('Total tasks: '+ listDiv.childElementCount);
  
      // Edit the task description
      editTaskDescription(index, 'Updated Task Description');
  
      // Check if the task description is updated in the DOM
      const updatedTaskElement = document.querySelector('.single-task');
      console.log(updatedTaskElement.querySelector('p').innerText)
      expect(updatedTaskElement.querySelector('p').innerText).toBe('Updated Task Description');
  
      // Check if the task description is updated in localStorage
      const storedTasks = JSON.parse(localStorage.getItem('todoTasks'));
      expect(storedTasks[0].description).toBe('Updated Task Description');
    });
  });
  
  