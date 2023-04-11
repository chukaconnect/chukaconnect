import React, { useState } from 'react'
import Axios from 'axios';
import Modal from '../../common/modal/Modal'
import Header from '../../common/header/Header'

import './style.css'

function Checkout({CartItem}) {
const [modalOpen,setModalOpen] = useState(false);


  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  function handleusername(e) {
    setUsername(e.target.value);
    
  }
  function handlepassword(e) {
    setPassword(e.target.value);
  }

const register =  (event) => {

  if (!username || password.length < 10 || username.length < 3){
    window.alert('Username should not be empty (at least 3 letters) and the phone number should not be less than 10 numbers');
    event.preventDefault();
  }
  else{
    event.preventDefault();
    setModalOpen(true);
  Axios.post("https://chukaconnect.herokuapp.com/user/cart/checkout",
  {username:username ,
   password:password})

   Axios.post("https://chukaconnect.herokuapp.com/user/cart",
   {CartItem:CartItem}
 )
   
  }
}


  return (
    <>
     <Header CartItem={CartItem} />
    <div className='Register'>
        <h1>Checkout</h1>
        <form >
        <div className='RegisterForm'>
          
      <label>Username</label>
        <input type='text' value={username} placeholder='Username (At least 3 letters)'
      onChange={handleusername}
        />
        <label>Phone Number</label>
        <input type='number' value={password}  placeholder='Phone (At least 10 numbers)'
        onChange={handlepassword}
        />
       <button type='submit' onClick={register} 
       >Submit</button>
       {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
        </form>
    </div>
    </>
  )
}

export default Checkout;