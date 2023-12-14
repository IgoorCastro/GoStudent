import React from 'react'
import * as C from './styles'

// Controlar as dimensão da input com font-size'css'
const Input = ({ type, placeholder, value, onChange, fontSize, height, bg, name, defaultValue }) => {
  const inputStyle = {
    fontSize: fontSize,
    height: height,
    background: bg
  }

  return (
    <C.Input
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      style={inputStyle}
      name={name}
    />
  )
}

export default Input
