import { SEARCH_TODO } from "../../../constants/actionTypes";

export const searchTodo = searchTerm => dispatch => {
	dispatch({
		type: SEARCH_TODO,
		payload: { searchTerm }
	});
};