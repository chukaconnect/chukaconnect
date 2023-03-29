import React from 'react'
import Cheader from '../common/Cheader'
import Cdrop from '../create/Cdrop'
import Type from './Type'
import './Create.css'

const Create = () => {
  return (
   <>
   <Cheader />
   <div className='steps'>
     <h1>Create Your Ticket In 3 Easy Steps</h1>
     <Cdrop />
     <Type />
   </div>
   </>
  )
}

export default Create
