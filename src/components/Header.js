import React from 'react'
// import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'



export default function Header(props) {
  return (
    <div className='bg-dark text-white text-center p-2'>
        <h3 className='display-8'>{props.title}</h3>
    </div>
  )
}
