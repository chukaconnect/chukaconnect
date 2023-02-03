import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'

const Fashionallsub2 = ({ fashionItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/fashionitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <div className='beddings-container'>
        {fashionItems.slice(0,6).map((fashionItems, index) => {
          return (
            <div className={`beddings-item ${index % 2 === 0 ? 'left' : 'right'}`}  key={fashionItems.id} 
            onClick={()=> handleItemClick(fashionItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={fashionItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{fashionItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {fashionItems.price}.00 </h4>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Fashionallsub2

