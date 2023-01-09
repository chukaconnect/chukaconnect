import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Fashionsub1 from './Fashionsub1'
import Fashionsub2 from './Fashionsub2'

import Fashionsub4 from './Fashionsub4'
import Wrapper from '../wrapper/Wrapper'

const Fashioncat = ({fashionItems}) => {
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
        <Fashionsub1 fashionItems={fashionItems} />
      </div>

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>For Women</h1>
        </div>
        <Fashionsub2 fashionItems={fashionItems} />
      </div>

      <div className='Clothes'>
        <div className='Clotheshead'>
          <h1>Cloth line</h1>
        </div>
        <Fashionsub4 fashionItems={fashionItems} />
      </div>

      <div className='fashionarrivals'>
      <Wrapper />
      </div>
 

    </section>
   </>
  )
}

export default Fashioncat
