import React from 'react';
import * as C from './styles';

const Button = ({ text, onClick, type = 'button', fontSize, width }) => {
  const ButtonStyle = {
    fontSize: fontSize,
    width: width
  }

  return (
    <C.Button
      type={type}
      onClick={onClick}
      style={ButtonStyle}
    >
      {text}
    </C.Button>
  )
}

export default Button
