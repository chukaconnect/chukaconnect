import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Snackssub2 from './Snackssub2'
import Header from '../../common/header/Header'
import {useNavigate} from 'react-router-dom'


import Wrapper from '../wrapper/Wrapper'

const Snackscat = ({snacksItems,productItems,CartItem}) => {
  const navigate = useNavigate();
  const viewallsub1=() =>{
    navigate('/snacksallsub1')
   }
  return (
   <>
   <Header CartItem={CartItem} productItems={productItems}/>
    <section className='fashioncat fab'>
      <div className='fashioncat-ad fab'>
        <Sliding />
      </div>
  

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>Food For 2</h1>
          <button onClick={viewallsub1} className="viewall-btn">View all</button>
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
