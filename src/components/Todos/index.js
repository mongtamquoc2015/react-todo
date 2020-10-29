import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';


const Films = () => {
  const [text, setText] = useState('');

  const { status, error, data, isFetching } = useQuery('todos', async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return data;
  });

  const [mutatePostTodo] = useMutation(
    text => axios.post('https://jsonplaceholder.typicode.com/todos', { text }),
    {
      onSuccess: () => {
        setText('');
      }
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    mutatePostTodo(text);
  }

  const onChange = ({ target }) => {
    setText(target.value);
  }

  return (
    <div>
      <p>
        When adding new items, the useMutation hook will observe the result of the asynchronous function.
        You can invalidate the query on success, and React Query will refetch the query with the same key.
      </p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={text || ''}
        />
        <button>Create</button>
      </form>
      <br />
      {
        status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          error.message
        ) : (
              <>

                <div>{isFetching ? 'Updating in background...' : ' '}</div>
              </>
            )
      }
      <ReactQueryDevtools initialIsOpen />
    </div >
  )
}

export default Films;