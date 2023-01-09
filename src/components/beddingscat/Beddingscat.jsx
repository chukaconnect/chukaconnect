import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Beddingssub1 from './Beddingssub1'
import Beddingssub2 from './Beddingssub2'
import Beddingssub3 from './Beddingssub3'

import Wrapper from '../wrapper/Wrapper'

const Beddingscat = ({beddingsItems}) => {
  return (
   <>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
      
      <div className='Formen'>
        <div className='Formenhead'>
          <h1>Duvet</h1>
        </div>
        <Beddingssub1 beddingsItems={beddingsItems} />
      </div>

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>For Comfortability</h1>
        </div>
        <Beddingssub2 beddingsItems={beddingsItems} />
      </div>

      <div className='Shoes'>
        <div className='Shoeshead'>
          <h1>Other housware</h1>
        </div>
        <Beddingssub3 beddingsItems={beddingsItems} />
      </div>

      <div className='fashionarrivals'>
      <Wrapper />
      </div>
 

    </section>
   </>
  )
}

export default Beddingscat
