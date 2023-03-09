import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/Form';



function App() {
  return (
    <div className="App">
      <Header title='My Tasks'/>
      <ToDoList/>
      <Form/>
    </div>
  );
}

export default App;
