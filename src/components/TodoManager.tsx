import React, { useState, useEffect } from 'react';
import TodoHeader from './TodoHeader';
import TodoContainer from './TodoContainer';
import { loadTodos, saveTodos } from './localStorageHelper';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function TodoManager() {
  // Initialize state with data from localStorage or an empty array if not present
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  // Save todos to localStorage whenever the state changes
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Add new todos
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Toggle todo completion status
  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoHeader />
      <TodoContainer
        todos={todos}
        onAddTodo={handleAddTodo}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default TodoManager;
