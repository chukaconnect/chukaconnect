
import React from "react"
import {useNavigate} from 'react-router-dom'

import './style.css'
const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
   
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
    
  }

  const navigate = useNavigate()
  const goDrinks = () =>{
    navigate('/drinkscat');
  };
  const goFashion = () =>{
    navigate('/fashioncat');
  };
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img1' style={mystyle}>
            <button className="bt" onClick={goDrinks}>Drinks</button>
          </div>
          <div className='img2' style={mystyle1}>
          <button className="bt" onClick={goFashion}>Fashion</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument