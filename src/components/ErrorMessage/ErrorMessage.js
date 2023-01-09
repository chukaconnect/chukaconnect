import React from 'react'
import {useNavigate} from 'react-router-dom'
import './ErrorMessage.css'

const ErrorMessage = () => {
  const navigate = useNavigate()
  const goShop = () =>{
    navigate(`/mastershop`)
  }
  
  return (
    <div>
      <div className='error-message'>
      <p>Sorry,we couldn't find any items matching your search</p>
      <button onClick={goShop}>Visit Our Shop</button>
      </div>
    </div>
  )
}

export default ErrorMessage
