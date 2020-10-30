import { useContext } from "react";
import { GlobalContext } from "../../context";
import { searchTodo } from '../../context/actions/todos/searchTodo';

export const useSearchForm = () => {
	const { todosDispatch } = useContext(GlobalContext);

	const onChange = ({ target }) => {
		searchTodo(target.value)(todosDispatch);
	}

	return { onChange }
};