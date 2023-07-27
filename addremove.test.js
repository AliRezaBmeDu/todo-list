import {
  buildTask, addTask, addNewTask, deleteTask,
} from './src/modules/addremove'; // Import the functions to be tested

// Mocking localStorage for testing
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock getElementById method to provide a fake listDiv element
jest.spyOn(document, 'getElementById').mockReturnValue(document.createElement('ul'));

describe('Task functions', () => {
  it('should add a new task to the DOM', () => {
    // Create a mock listDiv element
    const listDivMock = document.createElement('ul');
    listDivMock.id = 'list';

    // Spy on the appendChild method to check if it's called with the correct parameters
    const appendChildSpy = jest.spyOn(listDivMock, 'appendChild');

    // Call the addTask function with sample data
    const taskData = {
      description: 'Test Task',
      index: 1,
      completed: false,
    };
    addTask(taskData.description, taskData.index, taskData.completed, listDivMock);

    // Assert that the appendChild method was called with the correct parameters
    expect(appendChildSpy).toHaveBeenCalledWith(expect.any(HTMLLIElement));
  });

  it('should add a new task to the listDiv and update localStorage', () => {
    const mockListDiv = document.getElementById('list');
    // Create a mock input field and set its value
    const inputFieldMock = document.createElement('input');
    inputFieldMock.type = 'text';
    inputFieldMock.id = 'newtask';
    inputFieldMock.value = 'Test Task';

    // Call the addNewTask function with a sample 'Enter' keydown event
    const enterKeyEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
    });
    addNewTask(inputFieldMock, enterKeyEvent, mockListDiv);

    // Assert that the new task is added to the DOM
    const listDivMock = document.getElementById('list');
    expect(listDivMock.childElementCount).toBe(1);

    // Assert that localStorage has been updated with the new task
    const storedData = JSON.parse(localStorage.getItem('todoTasks'));
    expect(storedData).toContainEqual(
      expect.objectContaining({
        description: 'Test Task',
        completed: false,
      }),
    );
  });

  // Test for deleteTask//
  it('should remove the specified tasks from the list and update localStorage', () => {
    console.log(localStorageMock.getItem('todoTasks'));
    // Assert that the task has been removed from the DOM
    const listDivMock = document.getElementById('list');
    buildTask(listDivMock);
    const childElementCountBeforeDelete = listDivMock.childElementCount;
    // Call the deleteTask function with the index of the task to be deleted
    const index = 2;
    deleteTask([index - 1], listDivMock); // Delete Task 2
    const childElementCountAfterDelete = listDivMock.childElementCount;
    expect(childElementCountBeforeDelete - childElementCountAfterDelete).toBe(1);
    // Assert that localStorage has been updated after deletion
    const storedData = JSON.parse(localStorage.getItem('todoTasks'));
    expect(storedData).toEqual([{
      description: 'Read the documentation',
      completed: false,
      index: 1,
    },
    {
      description: 'Set the Linters',
      completed: false,
      index: 2,
    },
    {
      description: 'Test Task',
      completed: false,
      index: 3,
    },
    ]);
  });
});