import {
	ADD_TODO_ERROR, ADD_TODO_LOAD,
	ADD_TODO_SUCCESS, REMOVE_TODO,
	GET_TODO_ERROR, GET_TODO_LOAD, GET_TODO_SUCCESS, EDIT_TODO, SEARCH_TODO
} from '../../../constants/actionTypes';

export const todosReducer = (state, { type, payload }) => {
	switch (type) {

		case GET_TODO_LOAD:
			return {
				...state,
				isLoading: true
			}
		case GET_TODO_SUCCESS:
			return {
				...state,
				todos: [...payload],
				isLoading: false
			}
		case GET_TODO_ERROR:
			return {
				...state,
				isLoading: false,
				error: payload
			}
		case ADD_TODO_LOAD:
			return {
				...state,
				isLoading: true
			}
		case ADD_TODO_SUCCESS:
			return {
				...state,
				todos: [
					...state.todos,
					payload
				],
				isLoading: false
			}
		case ADD_TODO_ERROR:
			return {
				...state,
				isLoading: false,
				error: payload
			}
		case REMOVE_TODO:
			const newTodos = state.todos.filter(todo => todo.id !== payload);
			return {
				...state,
				todos: [...newTodos],
				isLoading: false
			}
		case EDIT_TODO:
			const newTodoList = state.todos.map(todo => {
				if (todo.id == payload.id) {
					const newTodo = {
						...todo,
						completed: !todo.completed
					};
					return newTodo
				}
				return todo;
			});
			return {
				...state,
				todos: [...newTodoList]
			}
		case SEARCH_TODO:
			const resultSearchTodos = state.todos.filter(todo => (
				todo.title
					.toLowerCase()
					.includes(payload.searchTerm.toLowerCase())
			));
			return {
				...state,
				todos: [...resultSearchTodos]
			}
		default:
			return state;
	}
}