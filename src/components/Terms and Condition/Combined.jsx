import React from 'react'
import './style.css'
import Condition from './Condition'
import Policy from './Policy'

const Combined = () => {
  return (
    <div className='black'>
      <Condition />
      <Policy />
    </div>
  )
}

export default Combined
