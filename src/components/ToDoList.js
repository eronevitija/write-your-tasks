import React, { useState } from 'react'
import '../App.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import  Button  from 'react-bootstrap/Button'
// import {Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'
import AddToDo from './AddToDo';


export default function ToDoList({add}) {

    const [taskList,setTaskList] = useState([]);
    const [value, setValue] = useState('');
    const [editTask, setEditTask] = useState(false);
    const [completedTask,setCompletedTask] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();
}

const addTask = (task) => {
    if(value.length === 0){
      alert('Please write your task!')
      return;
    }
    else{
    const newTask = {
      id: Math.random(),
      task: task,
    };
    //add the todo to the list
    setTaskList([...taskList, newTask])
    setValue('')
  }
};

const deleteTask = (id) => {
  const newTask = taskList.filter((task)=> task.id !== id);
  setTaskList(newTask)
}

const updateTask = (id) => {
  setValue([taskList[id]])
  taskList.slice(id,1)
}



  return (
    <div className='d-flex justify-content-center mt-5'>
      <div style={{width:'40%', height:'100%'}}>
        <AddToDo style={{marginBottom:32}} addTask={addTask} value={value} setValue={setValue} handleSubmit={handleSubmit}/>
         <div>
         {
            taskList.map((task,index)=>(
               <div className='col-md-10'>
                    <li className='taskList' key={index.toString()}>
                      {/* <input type={'checkbox'} checked={task.status} onChange={()=>checkBox(task.id)} /> */}
                      {task.task}
                     <div className='float-right'>
                    <i className='fa fa-edit m-2' onClick={()=>updateTask(index)} style={{cursor:'pointer'}}></i>
                     <i className='fa fa-trash' onClick={()=>deleteTask(task.id)} style={{cursor:'pointer'}}></i>
                     </div>
                    </li>
              </div>
            ))
          }
         </div>
        </div>
    </div>
  )
}
