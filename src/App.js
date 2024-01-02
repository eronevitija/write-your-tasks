import React, { useState } from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Auth/Login';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Register from './Auth/Register';

function App() {
  const [token, setToken] = useState('login');
 
  const toggle = (formName) => {
      setToken(formName); 
  }
  return (

   <div>
    <Header title='TaskMate'/> 
    <ToDoList />
     {/* {
      token === 'login' ? <Login onFormSwitch={toggle}/> : <Register onFormSwitch={toggle}/>
    } */}
   </div>
  //  <BrowserRouter>
  //     <div>
  //     <Header />
  //     <Routes>
  //       <Route path='/' element={<ToDoList/>} />
        
  //     </Routes>
  //     </div>
  //   </BrowserRouter>
  );
}

export default App;
