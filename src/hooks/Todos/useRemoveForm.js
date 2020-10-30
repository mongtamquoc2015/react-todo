import { useContext } from 'react';
import { removeTodo } from '../../context/actions/todos/removeTodo';
import { GlobalContext } from '../../context';

export const useRemoveForm = () => {
  const { todosDispatch } = useContext(GlobalContext);
  const onClick = (id) => {
    removeTodo(id)(todosDispatch);
  }

  return { onClick }
}