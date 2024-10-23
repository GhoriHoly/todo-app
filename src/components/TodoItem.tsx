import React from 'react';
import TodoToggleButton from './TodoToggleButton';

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggleComplete: (id: number) => void;
};

function TodoItem({ id, text, completed, onToggleComplete }: TodoItemProps) {
  return (
    <div className='each-todo-item'>
      <TodoToggleButton
        completed={completed}
        onToggle={() => onToggleComplete(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </div>

  );
}

export default TodoItem;
