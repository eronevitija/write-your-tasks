import Header from './components/Header';
import ToDoList from './components/ToDoList';
import React from 'react';
import './App.css'


function App() {
  return (
    <div >
      <Header title='ToDoList'/>
      <ToDoList />
    </div>
  );
}

export default App;
