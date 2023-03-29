import React from 'react'
import './Common.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'

const Cheader = () => {

  const navigate = useNavigate();
  const create=() =>{
    navigate('/create')
   }
   const home=() =>{
    navigate('/home')
   }
   const sign=() =>{
    navigate('/sign')
   }
  return (
   <>
   <div className="c-header">
     <div className="c-logo">
      <h1 onClick={home}>C-tickects</h1>
    </div>
    <div className='c-links'>
      <ul>
        <li>
          <p className="icon">Chuka connect</p>
        </li>
        <li>
         <p className="icon" onClick={create}>Sell</p>
        </li>
      </ul>

    </div>
  <div className='c-icons'>
<ul>
  <li>
  <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
  </li>
  <li>
  <FontAwesomeIcon icon={faCircleUser} className="icon" onClick={sign} />
  </li>
</ul>
  </div>
</div>

   </>
  )
}

export default Cheader
