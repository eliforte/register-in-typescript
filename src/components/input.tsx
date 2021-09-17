import React from 'react';

interface Props {
  type: string,
  name: string,
  message: string,
}

const Input: React.FC<Props> = ({ type, name, message }) => {
  return (
    <label htmlFor={ name }>
      <input type={ type } name={ name } id={ name } placeholder={ message } required/>
    </label>
  )
}

export default Input;
