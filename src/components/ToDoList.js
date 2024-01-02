import React, { useState } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddToDo from './AddToDo';
import './css/ToDoList.scss'
import EditToDo from './EditToDo';


export default function ToDoList() {

    const [taskList,setTaskList] = useState([]);
    const [value, setValue] = useState('');
    const [edit, isEditing] = useState(false);
   

    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(value);
      setValue('');  
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

    // const editTask = (id) => {
    //     const filter = taskList.filter(task=>task.id !== id);
    //     const selectedItem = taskList.find(task=>task.id === id);

    // }

    // const editToDo =(task,id) => {
    //     setTaskList(task.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} : todo))

    // }

  return (
      <div className='container'>
        <div className='addTask'>
            <AddToDo value={value} setValue={setValue} addTask={addTask} handleSubmit={handleSubmit}/>
              {
                  taskList.map((task,index)=>(
                      <div className='taskContainer' key={index.toString()}>
                        <ul className='list-group'>
                          <li className='list-group-item'>
                          {/* <span className='noTask'>{index+1}</span> */}
                          {/* <input value={task.task}/> */}
                          {task.task}
                          <div className='icons'>
                          <i className='fa fa-edit m-1'></i>
                          <i className='fa fa-trash m-1' onClick={()=>deleteTask(task.id)}></i>
                          </div>
                          </li>
                        </ul>
                      </div>
                  ))
              }
        </div>
      </div> 
  )
}
 