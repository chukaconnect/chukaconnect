import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'
import Header from "../../../common/header/Header"

const Electronicsallsub1 = ({electronicsItems,CartItem,productItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/electronicsitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Header CartItem={CartItem} productItems={productItems}/>
    <div className='beddings-container'>
        {electronicsItems.slice(0,5).map((electronicsItems, index) => {
          return (
            <div className={`beddings-item ${index % 2 === 0 ? 'left' : 'right'}`}  key={electronicsItems.id} 
            onClick={()=> handleItemClick(electronicsItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={electronicsItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{electronicsItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {electronicsItems.price}.00 </h4>
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

export default Electronicsallsub1

