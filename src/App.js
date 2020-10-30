import React from 'react';
import TodosContainer from './containers/Todos';
import { GlobalProvider } from './context';

function App() {
  return (
    <GlobalProvider>
      <TodosContainer />
    </GlobalProvider>
  );
}

export default App;
