import React, {useReducer} from 'react';

import ToDoList from './components/toDoLIst'
import { toDoReducer } from './reducers/reducer';

const todos = [
      {item: 'Learn about reducers',
    completed: false,
    id: 3892987589}
  ]



function App() {

  const [state, dispatch] = useReducer(toDoReducer, todos)

  const handleClear = e => {
    dispatch({ type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Got stuff to do!</h1>
      </header>
    <toDoForm
      
    />
    
    <ToDoList
    
    />
    <button onClick={handleClear}>Delete</button>
    </div>
  );
}

export default App;