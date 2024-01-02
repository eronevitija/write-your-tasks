import React, {useEffect, useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import axios from 'axios'

export default function Login(props) {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({});
    // const [success,setSuccess] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

   const validation = () => {
    let result = true;
    if(username === '')
    {
        result = false;
        alert('Please enter username')
    }
    else if(password === ''){
        result = false;
        alert('Please enter password')
    }
    return result
   }

 

  return (
        <div className='login'>
        <form onSubmit={handleSubmit}>
           <legend className='text-center'>Login</legend>
           {/* <div className='login'> */}
           <div className='form-group m-3'>
                <label>Username</label>
                <i className='fa fa-username'></i>
                <input 
                type={'text'} 
                placeholder='Username' 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)} 
                className='form-control'
                />
            </div>
            <div className='form-group m-3'>
                <label>Password</label>
                <i className='fa fa-username'></i>
                <input 
                type={'password'} 
                placeholder='Password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                className='form-control'
                />
            </div>  
            <div className='form-group m-3'>
                <input type={'checkbox'} />
                <label className='label'>Remember me</label>
            </div>
             <div className='d-flex justify-content-center m-3'>
                <button type='submit' className='btn btn-danger form-control'>Log in</button>
            </div>
            <div className='m-3'>
                <p>Don't have an account? <a href='/'>Register</a></p>
                {/* <Link to={'/Register'}>Register</Link> */}
                {/* <p className='text-right'><a href=''>Register</a></p> */}
                {/* <button onClick={()=>props.onFormSwitch('register')} className='btn btn-danger'>Register</button> */}
            </div>
        </form>
        </div>
  )
}

