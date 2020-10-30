import { REMOVE_TODO } from "../../../constants/actionTypes";

export const removeTodo = id => dispatch => {
  dispatch({
    type: REMOVE_TODO,
    payload: id
  });
}