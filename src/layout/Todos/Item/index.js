import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';
import './index.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%'
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
	list: {
		cursor: 'pointer'
	}
}));

export default function TodoItemUI({ todo, clicked, toggled }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<div className={classes.demo}>
						<List>
							<ListItem className={classes.list}>
								<ListItemAvatar>
									<Avatar>
										<WorkIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={todo.title}
									onClick={() => toggled(todo.id)}
									className={todo.completed ? 'complete' : ''}
								/>
								<ListItemSecondaryAction>
									<IconButton
										onClick={() => clicked(todo.id)}
										edge="end"
										aria-label="delete"
									>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
