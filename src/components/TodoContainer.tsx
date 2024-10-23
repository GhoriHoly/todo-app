import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoContainerProps = {
  todos: Todo[];
  onAddTodo: (text: string) => void;
  onToggleComplete: (id: number) => void;
};

function TodoContainer({ todos, onAddTodo, onToggleComplete }: TodoContainerProps) {
  return (
    <div className='card'>
      {/* Input Component */}
      <TodoInput onAddTodo={onAddTodo} />

      {/* List Component */}
      <TodoList todos={todos} onToggleComplete={onToggleComplete} />
    </div>
  );
}

export default TodoContainer;
