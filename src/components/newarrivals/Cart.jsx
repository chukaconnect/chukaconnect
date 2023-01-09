import React from "react"
import Ndata from "./Ndata"
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  
  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/newarrivalsitems/${id}`);
  }
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((Ndata) => {
          return (
            <div className='box' key={Ndata.id} 
            onClick={()=> handleItemClick(Ndata.id)}>
              <div className='img'>
                <img src={Ndata.cover} alt='' />
              </div>
              <h4>{Ndata.name}</h4>
              <span>Ksh {Ndata.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart