import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function AddToDo(props) {

  

  return (
        <form onSubmit={props.handleSubmit}>
          
        <div className='d-flex justify-content-center'>
        <div className='input-group'>
       <div className='col-md-8'>
       <input 
           className='form-control'
           type={'text'} 
           placeholder='Write your tasks'
           value={props.value} 
           onChange={(e)=>{props.setValue(e.target.value)}} 
           />
       </div>
            <button className='btn btn-dark' type='submit' onClick={()=>props.addTask(props.value)}>Add</button>

        </div>
        </div>
        </form>
  )
}
