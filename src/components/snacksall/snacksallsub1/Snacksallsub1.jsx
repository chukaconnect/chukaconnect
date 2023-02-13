import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'
import Header from "../../../common/header/Header"

const Snacksallsub1 = ({ snacksItems,CartItem,productItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/snacksitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Header CartItem={CartItem} productItems={productItems}/>
    <div className='beddings-container'>
        {snacksItems.map((snacksItems, index) => {
          return (
            <div className={`beddings-item ${index % 2 === 0 ? 'left' : 'right'}`}  key={snacksItems.id} 
            onClick={()=> handleItemClick(snacksItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={snacksItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{snacksItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {snacksItems.price}.00 </h4>
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

export default Snacksallsub1

