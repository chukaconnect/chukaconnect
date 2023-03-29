import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus , faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'
import './Create.css'

const Type = () => {
  const navigate = useNavigate();
  const setup=() =>{
    navigate('/setup')
   }
   const sign=() =>{
    navigate('/sign')
   }
  return (
   <>
   <div className='started'>
      <h2>Lets Get Started ?</h2>
      <div className='create-div' onClick={setup}>
      <FontAwesomeIcon icon={faCalendarPlus} />
      <p>Create event</p>
      </div>
      <div className='set-div' onClick={sign}>
      <FontAwesomeIcon icon={faUserCircle} />
      <p>Dont have an account? Set up now</p>
    </div>
   </div>
   </>
  )
}

export default Type
