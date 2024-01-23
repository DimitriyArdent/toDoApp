import React,{useState} from 'react'
 import './App.css';
 import Board from './components/Board';
 import Managment from './components/Managment';
 import Header from './components/Header';
 function App() {
  const [todos, setTodos] = useState([]);

  function addTask  (newTask) {
    setTodos((prevObjects) => [...prevObjects, newTask]);
    console.log('')
  };


  return (
    <div  >
      <Header></Header>
      <div className='wrapper'>
        <Managment addTask={addTask} todos={todos}></Managment>
        <Board todos={todos} setTodos={setTodos}></Board>
          
      </div>
     
          
        
      

    </div>

    

     
  );
}

export default App;
