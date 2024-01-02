import React, {useState} from 'react'

export default function EditToDo({editTask, value, setValue,task}) {

const handleSubmit = (e) => {
    e.preventDefault();
editTask(value,task.id)

setValue('');
}


  return (
   <form>
    <input type='text' value={value} placeholder='UpdateTask' onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit'>UpdateTask</button>


   </form>
  )
}
