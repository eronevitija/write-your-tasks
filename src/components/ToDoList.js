import React, { useState } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddToDo from './AddToDo';
import '../sass/ToDoList.scss'


export default function ToDoList() {

    const [taskList,setTaskList] = useState([]);
    const [value, setValue] = useState('');
    const [editTask, setEditTask] = useState(null);
    const [newTxt,setNewTxt] = useState('');

   
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

    const handleEdit = (todo) => {
     setEditTask(todo.id);
     setNewTxt(todo.task)
    }

   
   const handleSave = () => {
    setTaskList(taskList.map(task=>
      task.id === editTask ? {...task, task:newTxt} : task
    ));
    setEditTask(null);
    setNewTxt("");
   }
   
    const cancelEditing = () => {
      setEditTask(null);
      setNewTxt('');
    }

  return (
      <div className='container'>
        <div className='addTask'>
         <AddToDo value={value} setValue={setValue} addTask={addTask} handleSubmit={handleSubmit}/>
          {
             taskList.map((task) => (
                  <div className='taskContainer' key={task.id}>
                    <ul className='list-group'>
                      <li className='list-group-item'>
                        <span>{task.task}</span>
                         {
                           editTask === task.id ? (
                             <div>
                               <input 
                                type="text"
                                value={newTxt}
                                onChange={e => setNewTxt(e.target.value)}
                                className='input'
                                />
                               <span className='input-group-btn'>
                               <button onClick={handleSave} className='btn btn-success m-2'>Save</button>
                               <button onClick={cancelEditing} className='btn btn-danger'>Cancel</button>
                               </span>
                              </div>
                            ) : (
                              <div className='icons'>
                              <i className='fa fa-edit m-1' onClick={()=>handleEdit(task)}></i>
                              <i className='fa fa-trash m-1' onClick={()=>deleteTask(task.id)}></i>
                              </div>
                          )}
                          </li>
                        </ul>
                      </div>
                  ))  
          }
        </div>
      </div> 
  )
} 
 