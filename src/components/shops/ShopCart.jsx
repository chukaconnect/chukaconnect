import React from "react"
import {useNavigate} from 'react-router-dom'


const ShopCart = ({ shopItems, addToCart }) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/allitems/${id}`);
  }


  return (
    <>
      {shopItems.map((shopItems) => {
        return (
          <div className='box' key={shopItems.id} 
          onClick={()=> handleItemClick(shopItems.id)}>
            <div className='product mtop'>
              <div className='img'>
                <img src={shopItems.cover} alt='' />
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
              
                <div className='price'>
                  <h4>ksh {shopItems.price}.00 </h4>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart