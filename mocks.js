// Mock localStorage
export const mockLocalStorage = (() => {
  const store = {};
  return {
    getItem: (key) => store[key] || null,
    removeItem: (key) => delete store[key],
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