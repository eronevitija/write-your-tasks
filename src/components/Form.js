import React, { useState } from 'react'

export default function Form() {
    const [tasks,setTasks] = useState('');

    const onChangeTask = (event) => {
        setTasks(event.target.value)
    }
    
  return (
    <div>
        <form>
            <input type={'text'} placeholder='Add some tasks' value={tasks} onChange={onChangeTask} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
