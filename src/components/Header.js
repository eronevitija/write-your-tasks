import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Header({title}) {

  return (
    <header>
      <nav className='navbar navbar-light bg-light'>
        <div className='container justify-content-center'>
        <h2 className='navbar-brand'>{title}</h2>
        </div>
        <i className='fa fa-toggle-on' aria-hidden='true' style={{color:'dark',cursor:'pointer',marginRight:'1np%'}}></i>
      </nav>
  </header>
  )
}
