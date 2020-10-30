import { ADD_TODO_LOAD, ADD_TODO_ERROR, ADD_TODO_SUCCESS } from "../../../constants/actionTypes";
import { axiosInstance } from '../../../helpers/axiosInstance';

export const createTodo = (todo) => dispatch => {
  console.log('todo', todo);
  dispatch({ type: ADD_TODO_LOAD });
  axiosInstance.post('/todos', todo)
    .then(res => {
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_TODO_ERROR,
        payload: err
      })
    })
}