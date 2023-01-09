import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Healthcatsub1 from './Healthcatsub1'
import Healthcatsub2 from './Healthcatsub2'
import Healthcatsub3 from './Healthcatsub3'

import Wrapper from '../wrapper/Wrapper'

const Healthcat = ({beautyItems}) => {
  return (
   <>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
      <div className='Formen'>
        <div className='Formenhead'>
          <h1>For Men</h1>
        </div>
        <Healthcatsub1 beautyItems={beautyItems} />
      </div>

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>For Women</h1>
        </div>
        <Healthcatsub2 beautyItems={beautyItems} />
      </div>

      <div className='Shoes'>
        <div className='Shoeshead'>
          <h1>Health & Beauty Products</h1>
        </div>
        <Healthcatsub3 beautyItems={beautyItems} />
      </div>

      <div className='fashionarrivals'>
      <Wrapper />
      </div>
 

    </section>
   </>
  )
}

export default Healthcat
