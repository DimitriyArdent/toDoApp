import React, {useState} from 'react'
import  './components.css'
 function Managment({addTask,todos}) {
    const [taskData, setTaskData] = useState({
        task: '',
        status: false,
        id:0
      });

    function handleSubmit(e){
        e.preventDefault()
        addTask(taskData)
    }
    const handleChange = (e) => {
        const { value } = e.target;
        setTaskData((prevData) => ({
          ...prevData,
           task : value,
           id: (todos.length +1 )
        }));
      };

  return (
    <div className='sub-wrapper' >
        
        <form  className='form-wrap' onSubmit={(e)=>handleSubmit(e)}>
            <div className='content-wrap'>
                 <label>add task</label>
                 <input name='taskName' onChange={(e)=>handleChange(e)} value={taskData.task}></input>
                 <button type='submit'>add</button>
            </div>
            
        </form>
        
    </div>
  )
}

export default Managment
