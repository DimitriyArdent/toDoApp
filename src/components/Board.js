import React from 'react'
import './components.css'
import { MdDelete } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { FaSort } from "react-icons/fa";

function Board({todos,setTodos}) {

    function handleFinishf(id) {
        setTodos((prev) => {
          const updatedTodos = prev.map((todo) =>
            todo.id === id ? { ...todo, status: true } : todo
          );
          return updatedTodos;
        });
      }
    
      function handleDelete(id){
        setTodos((prev)=>{
            const updatedTodos = prev.filter((todo)=>
            todo.id != id
            );
            return updatedTodos
        })
      }
      function filter(){
         //slice () for array its like {...<obj>} for object
        const sortedTodos = todos.slice().sort((a, b) => {
             return a.status === b.status ? 0 : (a.status ? 1 : -1);  // does status the same? does a true? does a false?
          });
           setTodos(sortedTodos)
      }
       

  return (
    <div className='sub-wrapper'>
        <div className='title-wrapper'>
             <FaSort className='filter' onClick={filter}></FaSort>
             <div>tasks:</div>
        </div>
       
      {(todos && todos.length > 0) ? todos.map((data)=>(
        <>
        {<div className='task'>
            <div>{data.id}</div>
            <div>{data.task}</div>
            <div>{data.status? 'Completed': 'Uncompleted'}</div>
            <MdDelete onClick={()=>{handleDelete(data.id)}}  ></MdDelete>
            <GiFinishLine onClick={()=>{handleFinishf(data.id)}}></GiFinishLine>
        </div>}
        </>
      )) : <div>no data</div>}
    </div>
  )
}

export default Board
