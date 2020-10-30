import { createTodo } from "../../context/actions/todos/createTodo";
import { v4 as uuidv4 } from 'uuid';
import { useState, useContext } from 'react';
import { GlobalContext } from '../../context';

export const useCreateForm = () => {
  const [title, setTitle] = useState('');
  const isInvalid = !title.length;
  const { todosDispatch } = useContext(GlobalContext);

  const onChange = ({ target }) => {
    setTitle(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    createTodo({
      id: uuidv4(),
      title,
      completed: false
    })(todosDispatch);
    setTitle('');
  }

  return { onChange, onSubmit, title, isInvalid };
}