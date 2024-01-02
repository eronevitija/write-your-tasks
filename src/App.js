import React, { useState } from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
 
  return (
   <div>
    <Header title='TaskMate'/> 
    <ToDoList />
   </div>
  );
}

export default App;
