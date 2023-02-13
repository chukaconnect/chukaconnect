import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Kitchenwaresub1 from './Kitchenwaresub1'
import Kitchenwaresub3 from './Kitchenwaresub3'
import Header from '../../common/header/Header'
import {useNavigate} from 'react-router-dom'

import Wrapper from '../wrapper/Wrapper'

const Kitchenwarecat = ({kitchenwareItems,productItems,CartItem}) => {
  const navigate = useNavigate();
  const viewallsub1=() =>{
    navigate('/kitchenallsub1')
   }
   const viewallsub2=() =>{
    navigate('/kitchenallsub3')
   }
  return (
   <>
   <Header CartItem={CartItem} productItems={productItems}/>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
      <div className='Formen'>
        <div className='Formenhead'>
          <h1>Plates</h1>
          <button onClick={viewallsub1} className="viewall-btn">View all</button>
        </div>
        <Kitchenwaresub1 kitchenwareItems={kitchenwareItems} />
      </div>

      <div className='Shoes'>
        <div className='Shoeshead'>
          <h1>Shop Some Kitchenware</h1>
          <button onClick={viewallsub2} className="viewall-btn">View all</button>
        </div>
        <Kitchenwaresub3 kitchenwareItems={kitchenwareItems} />
      </div>

      <div className='fashionarrivals'>
      <Wrapper />
      </div>
 

    </section>
   </>
  )
}

export default Kitchenwarecat
