import React from "react"
import Fashion from "./Fashion"
import Electronics from './Electronics'
import Drinks from "./Drinks"
import Snacks from "./Snacks"
import Beddings from "./Beddings"
import Kitchenware from "./Kitchenware"
import Scroll from "./Scroll"
import "./style.css"

const Master = ({ fashionItems,electronicsItems,drinksItems,snacksItems,beddingsItems,kitchenwareItems,beautyItems,addToCart }) => {
  return (
    <>
    
      <section className='flash wee'>
      <Scroll/>
        <div className='container'>
          <div className='heading ree f_flex'>
            <h1>Fashion</h1>
          </div>
          <Fashion fashionItems={fashionItems} addToCart={addToCart} />
        </div>
      </section>
      <section className='flash wee'>
        <div className='container'>
          <div className='heading ree  f_flex'>
            
            <h1>Electronics</h1>
          </div>
          <Electronics electronicsItems={electronicsItems} addToCart={addToCart} />
        </div>
      </section>
   
 
        
      <section className='flash wee'>
        <div className='container'>
          <div className='heading ree  f_flex'>
           
            <h1>Drinks</h1>
          </div>
          <Drinks drinksItems={drinksItems} addToCart={addToCart} />
        </div>
      </section>
           
      <section className='flash wee'>
        <div className='container'>
          <div className='heading  ree f_flex'>
           
            <h1>Snacks</h1>
          </div>
          <Snacks snacksItems={snacksItems} addToCart={addToCart} />
        </div>
      </section>
           
      <section className='flash wee'>
        <div className='container'>
          <div className='heading ree  f_flex'>
            
            <h1>Beddings</h1>
          </div>
          <Beddings beddingsItems={beddingsItems} addToCart={addToCart} />
        </div>
      </section>
           
      <section className='flash wee'>
        <div className='container'>
          <div className='heading ree  f_flex'>
          
            <h1>Kitchenware</h1>
          </div>
          <Kitchenware kitchenwareItems={kitchenwareItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default Master