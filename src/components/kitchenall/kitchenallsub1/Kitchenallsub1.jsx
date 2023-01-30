import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'

const Kitchenallsub1 = ({ kitchenwareItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/kitchenwareitems/${id}`);
  }

  return (
    <div className='beddings-container'>
        {kitchenwareItems.slice(0,5).map((kitchenwareItems, index) => {
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
  )
}

export default Kitchenallsub1

