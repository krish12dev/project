import React from 'react'

const InputField = ({types, value, onChange,title,name}) => {
  return (
    <div>
      <label>{title}</label>
      <input type='type' value={value} name='name' onChange={onChange}/>
    </div>
  )
}

export default InputField
