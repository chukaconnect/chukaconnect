import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../common/header/Header'
import './ErrorMessage.css'

const ErrorMessage = ({CartItem,productItems}) => {
  const navigate = useNavigate()
  const goShop = () =>{
    navigate(`/mastershop`)
  }
  
  return (
    <>
    <Header CartItem={CartItem} productItems={productItems}/>
    <div>
      <div className='error-message'>
      <p>Sorry,we couldn't find any items matching your search</p>
      <button onClick={goShop}>Visit Our Shop</button>
      </div>
    </div>
    </>
  )
}

export default ErrorMessage
