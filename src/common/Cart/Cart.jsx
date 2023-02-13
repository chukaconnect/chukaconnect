import React from "react"
import "./style.css"
import {useNavigate} from 'react-router-dom'
import Header from "../header/Header"

//const cart
const Cart = ({ CartItem, addToCart, decreaseQty,productItems }) => {

 //declaring navigate
const navigate = useNavigate()

//directs to cart
//sends the item purchased and the number to the database
const goCheck = () =>{
  if (CartItem.length === 0){
      navigate('/cart')
     } else{
          navigate('/cart/checkout');
         
}  
  };
//directs to mastershop
const goMaster = ()=>{
  navigate('/mastershop')
}
//calucate total of items
const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
 <>
 <Header CartItem={CartItem} productItems={productItems}/>
  <section className='cart-items'>
        <div className='container d_flex'>
          {/* display items when are added and no items message display when not*/}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items available in the Cart.<button onClick={goMaster} >Visit our shop</button></h1>}

            {/* mapping items added in the cart */}
            {CartItem.map((item) => {
            
              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                     <h3>{item.name}</h3>
                       <h4>
                        Quantity {item.qty} items
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                    {/* to increase the quantity and reduce the quantity of an item*/}
                    
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                       +
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        -
                      </button>
                    </div>
                  </div>
                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>
{/*cart summary */}
  <div className='cart-total product'>
     <h2>Cart Summary</h2>
     <p>Free delivery</p>
            <div className="checkout-btn">
          <button type="submit" onClick={goCheck}>Checkout (Ksh {totalPrice})</button>
        </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Cart