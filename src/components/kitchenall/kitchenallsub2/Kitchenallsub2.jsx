import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'
import Header from "../../../common/header/Header"

const Kitchenallsub2 = ({ kitchenwareItems,CartItem,productItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/kitchenwareitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Header CartItem={CartItem} productItems={productItems}/>
    <div className='beddings-container'>
        {kitchenwareItems.slice(6,13).map((kitchenwareItems, index) => {
          return (
            <div className={`beddings-item ${index % 2 === 0 ? 'left' : 'right'}`}  key={kitchenwareItems.id} 
            onClick={()=> handleItemClick(kitchenwareItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={kitchenwareItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{kitchenwareItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {kitchenwareItems.price}.00 </h4>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
    </>
  )
}

export default Kitchenallsub2

