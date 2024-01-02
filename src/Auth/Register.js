import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

export default function Register(props) {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className='register'>
        <form onSubmit={handleSubmit}>
            <legend className='text-center'>Register</legend>
            <div className='form-group m-3'>
                <label>Full name</label>
                <input 
                type={'text'} 
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                className='form-control'
                required
                />
            </div>

            <div className='form-group m-3'>
                <label>Email</label>
                <input 
                type={'email'} 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className='form-control'
                required
                />
            </div>

            <div className='form-group m-3'>
                <label>Password</label>
                <input 
                type={'password'} 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='form-control'
                required
                />
            </div>
            <div className='d-flex justify-content-center'>
            <button onClick={()=>props.onFormSwitch('login')} className='btn btn-danger'>Register</button>
            </div>
        </form>

    </div>
  )
}
