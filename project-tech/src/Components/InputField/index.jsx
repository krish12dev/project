import React from 'react'
import './Inputfield.css'

const InputField = ({types, value, onChange,title,name, errorMessage}) => {
  return (
    <div className='label_container'>
      <label>{title}</label>
      <input className='input_container' type={types} value={value} name={name} onChange={onChange}/>
    {errorMessage && <p className='error_message'>{errorMessage}</p>}
    </div>
  )
}

export default InputField
