import React, { useState } from 'react'
import Form from './Form';
import '../App.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import  Button  from 'react-bootstrap/Button'

export default function ToDoList() {
    const [taskList,setTaskList] = useState([]);
    const [value, setValue] = useState('');
    const [editTask, setEditTask] = useState('');

  const addTask = (task) => {
    const newTask = {
      id: Math.random(),
      task: task,
    };
    //add the todo to the list
    setTaskList([...taskList, newTask])
    setValue('')
  };
const editTasks = ()=> {
    let editTxt = [...taskList].filter(task=>task.id!== editTask.id)
    let updateObj = [...editTxt,  editTask]
    setTaskList(updateObj);
    setEditTask('')
}
const deleteTask = (id) => {
  const newTask = taskList.filter((task)=> task.id !== id);
  setTaskList(newTask)
}
  return (
    <div>
        <Form style={{marginBottom:32}} addTask={addTask} deleteTask={deleteTask} value={value} setValue={setValue}/>
          {
            taskList.map((task)=>(
              <li key={task.id} className='taskList'>
                {task.task}
               <div className='icons'>
               <i className='fa fa-edit' onClick={()=>editTasks(task)} style={{cursor:'pointer'}}></i>
               <i className='fa fa-trash' onClick={()=>deleteTask(task.id)} style={{cursor:'pointer'}}></i>
               </div>
              </li>
            ))
          }
    </div>
  )
}
