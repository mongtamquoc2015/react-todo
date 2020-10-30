import { EDIT_TODO } from '../../../constants/actionTypes';

export const editTodo = id => dispatch => {
	dispatch({
		type: EDIT_TODO,
		payload: { id }
	});
}