import React from 'react'
import './Center.css'
//this function will be used as a decorator( decorator as a component that wrap a stories)
function Center(props) {
  return (
    <div className='center'>
        {props.children}
        </div>
  )
}

export default Center