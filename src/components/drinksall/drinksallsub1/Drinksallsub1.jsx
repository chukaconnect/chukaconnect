import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'

const Drinksallsub1 = ({ drinksItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/drinksitems/${id}`);
  }

  return (
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
  )
}

export default Drinksallsub1

