import React, { useReducer, createContext } from 'react';
import { todosReducer } from './reducers/todos';
import { todosInitialState } from './initial/todos';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [todosState, todosDispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <GlobalContext.Provider value={
      {
        todosState,
        todosDispatch
      }
    }>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, GlobalContext }
