import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';

import Header from '../../components/Header';
import { GlobalContext } from '../../context';
import { editTodo } from '../../context/actions/todos/editTodo';
import getTodos from '../../context/actions/todos/getTodos';
import { useCreateForm } from '../../hooks/Todos/useCreateForm';
import { useRemoveForm } from '../../hooks/Todos/useRemoveForm';
import { useSearchForm } from '../../hooks/Todos/useSearchForm';
import TodoCreateUI from '../../layout/Todos/Create';
import TodoListUI from '../../layout/Todos/List';
import Spinner from '../../components/Spinner';

const TodosContainer = () => {
	const { todosState: { todos }, todosDispatch } = useContext(GlobalContext);

	const restCreateForm = useCreateForm();
	const restRemoveForm = useRemoveForm();
	const restSearchForm = useSearchForm();

	useEffect(() => {
		getTodos()(todosDispatch);
	}, [todosDispatch]);

	const handleToggleComplete = (id) => {
		editTodo(id)(todosDispatch);
	}

	return (
		<>
			<Header {...restSearchForm} />
			<Container>
				<Grid container>
					<Grid item xs={6}>
						<TodoCreateUI {...restCreateForm} />
					</Grid>
					<Grid item xs={6}>
						<TodoListUI
							todos={todos}
							{...restRemoveForm}
							toggleComplete={handleToggleComplete}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default TodosContainer;