import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Electronicsub1 from './Electronicsub1'
import Electronicsub2 from './Electronicsub2'
import {useNavigate} from 'react-router-dom'


import Wrapper from '../wrapper/Wrapper'

const Electroniccat = ({electronicsItems}) => {
  const navigate = useNavigate();
  const electronicsallsub1=() =>{
    navigate('/electronicsallsub1')
   }
   const electronicsallsub2=() =>{
    navigate('/electronicsallsub2')
   }
  return (
   <>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
      <div className='Formen'>
        <div className='Formenhead'>
          <h1>Laptops</h1>
          <button onClick={electronicsallsub1} className="viewall-btn">View all</button>
        </div>
        <Electronicsub1 electronicsItems={electronicsItems} />
      </div>

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>Accessories & Appliances</h1>
          <button onClick={electronicsallsub2} className="viewall-btn">View all</button>
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
