import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'
import Header from "../../../common/header/Header"

const Drinksallsub1 = ({ drinksItems,CartItem,productItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/drinksitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Header CartItem={CartItem} productItems={productItems}/>
    <div className='beddings-container'>
        {drinksItems.map((drinksItems, index) => {
          return (
            <div className={`beddings-item ${index % 2 === 0 ? 'left' : 'right'}`}  key={drinksItems.id} 
            onClick={()=> handleItemClick(drinksItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={drinksItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{drinksItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {drinksItems.price}.00 </h4>
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

export default Drinksallsub1

