import React from 'react';
import TodoUI from '../Item';

const TodoListUI = ({ todos, onClick, toggleComplete }) => {
  return todos.map(todo => (
    <TodoUI
      key={todo.id}
      todo={todo}
      clicked={onClick}
      toggled={toggleComplete}
    />
  ))
}

export default TodoListUI;