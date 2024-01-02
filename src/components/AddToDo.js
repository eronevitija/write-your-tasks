import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../sass/AddToDo.scss'


export default function AddToDo({value,setValue,addTask,handleSubmit}) {

  return (
      <form onSubmit={handleSubmit} className='form'>
        <div className="input-group">
          <input 
           type="text" 
           placeholder='Write your task'
           className="form-control" 
           value={value} 
           onChange={(e)=>{setValue(e.target.value)}}
          />
           <span className="input-group-btn">
           <button className="btn btn-danger" type="button" onClick={()=>addTask(value)}>Add</button>
           </span>
        </div>
      </form>
  )
}

