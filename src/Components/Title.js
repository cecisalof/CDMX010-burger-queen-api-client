import React from 'react'
import './Title.css'

// eslint-disable-next-line react/prop-types
const Title = ({ text }) => {
  return (
    <div className='title-container'>
      <label> {text} </label>
    </div>
  )
};

export default Title;
