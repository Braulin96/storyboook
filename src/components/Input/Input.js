import React from 'react'
import './Input.css'

function Input(props) {
    const { variant = 'primary', children, ...rest} = props
  return (
    <input className={`input ${variant}`} {...rest}/>
  )
}
export default Input