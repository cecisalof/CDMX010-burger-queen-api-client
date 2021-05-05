import React from 'react'
import './Label.css'

// eslint-disable-next-line react/prop-types
const Label = ({ text }) => {
  return (
    <div>
      <label> {text} </label>
    </div>
  )
};

export default Label;
