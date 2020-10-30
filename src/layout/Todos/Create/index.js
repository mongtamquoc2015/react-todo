import {
  Button,

  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  formContianer: {
    display: 'flex',
    justifyContent: '',
    alignItems: 'center',
    width: '500px',
    marginLeft: '200px',
    marginTop: '20px'
  },
  textField: {
    marginRight: '50px'
  }
});

const TodoCreateUI = ({ onChange, onSubmit, title, isInvalid }) => {
  const classes = useStyles();
  return (
    <>
      <form onSubmit={onSubmit} className={classes.formContianer}>
        <TextField
          value={title || ''}
          onChange={onChange}
          className={classes.textField}
          label="Message"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isInvalid}
        >
          Add
        </Button>
      </form>
    </>
  )
}

export default TodoCreateUI
