import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
};

function TodoList({ todos, onToggleComplete }: TodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
