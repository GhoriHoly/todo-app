const LOCAL_STORAGE_KEY = 'todos';

// Load todos from localStorage
export const loadTodos = (): any[] => {
  const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

// Save todos to localStorage
export const saveTodos = (todos: any[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};
