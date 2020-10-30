import { GET_TODO_ERROR, GET_TODO_LOAD, GET_TODO_SUCCESS } from '../../../constants/actionTypes';
import { axiosInstance } from '../../../helpers/axiosInstance';

const getTodos = () => dispatch => {
  dispatch({ type: GET_TODO_LOAD });
  axiosInstance.get('/todos')
    .then(res => {
      dispatch({
        type: GET_TODO_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TODO_ERROR,
        payload: err
      })
    });
}

export default getTodos;