import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Drinkssub1 from './Drinkssub1'



import Wrapper from '../wrapper/Wrapper'

const Drinkscat = ({drinksItems}) => {
  return (
   <>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
      <div className='Formen'>
        <div className='Formenhead'>
          <h1>Drinks</h1>
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
