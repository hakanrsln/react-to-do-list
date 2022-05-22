import { useState } from 'react';
import {FormControl, Button} from 'react-bootstrap'
function App() {

    const [todoList, setTodoList] = useState([])

    const [todo, setTodo] = useState('')
    
    const addTodo = () => {
            console.log(todo)
            setTodo('')
          }
  return (
    <div className="App">
     <h1>Todo List</h1>
     <div className='d-flex w-50' >
       <FormControl
          placeholder='todo'
          value={todo}
          onChange={(e) => setTodo (e.target.value)}
       />
    <Button onClick={() => addTodo()}>Add Todo</Button> 
    </div>
    
    
    
      
 
    </div>
  );
}

export default App;
