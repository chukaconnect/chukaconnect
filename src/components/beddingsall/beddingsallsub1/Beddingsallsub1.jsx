import React from "react"
import {useNavigate} from 'react-router-dom'
import './all.css'

const Beddingsallsub1 = ({ beddingsItems}) => {

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/beddingsitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <div className='beddings-container'>
        {beddingsItems.slice(0,5).map((beddingsItems, index) => {
          return (
            <div className={`beddings-item ${index % 2 === 0 ? 'left' : 'right'}`}  key={beddingsItems.id} 
            onClick={()=> handleItemClick(beddingsItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={beddingsItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{beddingsItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {beddingsItems.price}.00 </h4>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Beddingsallsub1

