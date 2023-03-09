import Header from './components/Header';
import ToDoList from './components/ToDoList';
import React from 'react';
import './App.css'


function App() {
  return (
    <div >
      <Header title='ToDo'/>
      <div className='toDoListContainer'>
      <ToDoList />
      </div>
    </div>
  );
}

export default App;
