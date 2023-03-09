import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button'
import '../App.css'

export default function Form(props) {
  return (
        <form className='form-horizontal'>
        <div className='input-group'>
        <input 
           className='form-control'
           type={'text'} 
           placeholder='Add some tasks'
           value={props.value} 
           onChange={(e)=>{props.setValue(e.target.value)}} 
           required/>
          <Button variant='default' size='lg' style={{borderColor:'silver'}}  onClick={()=>props.addTask(props.value)}>Add</Button> 
        </div>
        </form>
  )
}
