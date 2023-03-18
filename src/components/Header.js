import React from 'react'
// import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'



export default function Header(props) {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark '>
        <div className='container-fluid justify-content-center'>
        <a className='navbar-brand' href='#'>{props.title}</a>
        </div>
      </nav>
    </header>
  )
}
