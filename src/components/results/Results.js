
import React from 'react'
import { useLocation} from 'react-router-dom';
import './Results.css'
import Header from '../../common/header/Header';

const Results = ({addToCart,CartItem,productItems}) => {
  const location = useLocation()
  const matchingItems = location.state.matchingItems;
  return (
    <>
     <Header CartItem={CartItem} productItems={productItems}/>  
{matchingItems.map(productItems => (
    
 <div className='results-container'>
  <div className='item-container'>
  <img src={productItems.cover} alt={productItems.name}/>
    <h1>{productItems.name}</h1>
      <h2>Ksh {productItems.price}</h2>
       <button onClick={() => addToCart(productItems)} >Add To Cart</button>
  </div>
 
 </div>
     
  
))}

      
     
    </>
  )
}

export default Results



