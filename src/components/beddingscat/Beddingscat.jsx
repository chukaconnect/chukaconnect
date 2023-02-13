import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Beddingssub1 from './Beddingssub1'
import Beddingssub2 from './Beddingssub2'
import Beddingssub3 from './Beddingssub3'
import {useNavigate} from 'react-router-dom'
import Header from '../../common/header/Header'
import Wrapper from '../wrapper/Wrapper'

const Beddingscat = ({beddingsItems,productItems,CartItem}) => {
  const navigate = useNavigate();
  const viewallsub1=() =>{
    navigate('/beddingsallsub1')
   }
   const viewallsub2=() =>{
    navigate('/beddingsallsub2')
   }
   const viewallsub3=() =>{
    navigate('/beddingsallsub3')
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
          <h1>Duvet</h1>
          <button onClick={viewallsub1} className="viewall-btn">View all</button>
        </div>
        <Beddingssub1 beddingsItems={beddingsItems} />
      </div>

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>For Comfortability</h1>
          <button onClick={viewallsub2} className="viewall-btn">View all</button>
        </div>
        <Beddingssub2 beddingsItems={beddingsItems} />
      </div>

      <div className='Shoes'>
        <div className='Shoeshead'>
          <h1>Other housware</h1>
          <button onClick={viewallsub3} className="viewall-btn">View all</button>
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
