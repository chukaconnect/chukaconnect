import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Drinkssub1 from './Drinkssub1'
import Header from '../../common/header/Header'
import {useNavigate} from 'react-router-dom'



import Wrapper from '../wrapper/Wrapper'

const Drinkscat = ({drinksItems,productItems,CartItem}) => {
  const navigate = useNavigate();
  const drinksallsub1=() =>{
    navigate('/drinksallsub1')
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
          <h1>Drinks</h1>
          <button onClick={drinksallsub1} className="viewall-btn">View all</button>
        </div>
        <Drinkssub1 drinksItems={drinksItems} />
      </div>

      <div className='fashionarrivals'>
      <Wrapper />
      </div>
 

    </section>
   </>
  )
}

export default Drinkscat
