import React from 'react'
import './cat.css'
import Sliding from './Sliding'
import Fashionsub1 from './Fashionsub1'
import Fashionsub2 from './Fashionsub2'
import {useNavigate} from 'react-router-dom'
import Fashionsub4 from './Fashionsub4'
import Wrapper from '../wrapper/Wrapper'
import Header from '../../common/header/Header'

const Fashioncat = ({fashionItems,CartItem,productItems}) => {
  const navigate = useNavigate();
  const viewallsub1=() =>{
    navigate('/fashionallsub1')
   }
   const viewallsub2=() =>{
    navigate('/fashionallsub2')
   }
  const viewallsub3=() =>{
   navigate('/fashionallsub3')
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
          <h1>For Men</h1>
          <button onClick={viewallsub1} className="viewall-btn">View all</button>
        </div>
        <Fashionsub1 fashionItems={fashionItems} />
      </div>

      <div className='Forwomen'>
        <div className='Forwomenhead'>
          <h1>For Women</h1>
          <button onClick={viewallsub2} className="viewall-btn">View all</button>
        </div>
        <Fashionsub2 fashionItems={fashionItems} />
      </div>

      <div className='Clothes'>
        <div className='Clotheshead'>
          <h1>All about shoes</h1>
          <button onClick={viewallsub3} className="viewall-btn">View all</button>
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
