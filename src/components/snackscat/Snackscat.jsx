import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Snackssub2 from './Snackssub2'


import Wrapper from '../wrapper/Wrapper'

const Snackscat = ({snacksItems}) => {
  return (
   <>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
  

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>Food For 2</h1>
        </div>
        <Snackssub2 snacksItems={snacksItems} />
      </div>


      <div className='fashionarrivals'>
      <Wrapper />
      </div>
 

    </section>
   </>
  )
}

export default Snackscat
