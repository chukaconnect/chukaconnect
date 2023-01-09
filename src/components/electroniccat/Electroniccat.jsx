import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Electronicsub1 from './Electronicsub1'
import Electronicsub2 from './Electronicsub2'


import Wrapper from '../wrapper/Wrapper'

const Electroniccat = ({electronicsItems}) => {
  return (
   <>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
      <div className='Formen'>
        <div className='Formenhead'>
          <h1>Laptops</h1>
        </div>
        <Electronicsub1 electronicsItems={electronicsItems} />
      </div>

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>Accessories & Appliances</h1>
        </div>
        <Electronicsub2 electronicsItems={electronicsItems} />
      </div>


      <div className='fashionarrivals'>
      <Wrapper />
      </div>
 

    </section>
   </>
  )
}

export default Electroniccat
