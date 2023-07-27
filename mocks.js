
// Mock localStorage
export const mockLocalStorage = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => (store[key] = value),
      removeItem: (key) => delete store[key],
      clear: () => (store = {}),
    };
  })();
  
  // Mock DOM elements
  export const mockElement = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <ul id="list">
        <!-- Add some sample tasks here if needed for testing -->
      </ul>
      <button id="clear-completed"></button>
      <input id="newtask" type="text" />
    `;
    return element;
  };
  