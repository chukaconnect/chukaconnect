import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Bata from "./components/Bata"
import Fata from "./components/Fata"
import Leta from "./components/Leta"
import Rata from "./components/Rata"
import Sata from "./components/Sata"
import Gata from "./components/Gata"
import Kata from "./components/Kata"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Master from "./components/Master/Master"
import Combined from './components/Terms and Condition/Combined'
import Help from './components/Help/Help'
import Checkout from "./components/checkout/Checkout"
import Results from "./components/results/Results"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import Items from "./components/Items/Items"
import Shopitems from "./components/shopitems/Shopitems"
import Beddingsitems from "./components/beddingsitems/Beddingsitems"
import Drinksitems from "./components/drinksitem/Drinksitems"
import Electronicsitems from "./components/electronicsitems/Electronicsitems"
import Fashionitems from "./components/fashionitems/Fashionitems"
import Kitchenwareitems from "./components/kitchenwareitems/Kitchenwareitems"
import Snacksitems from "./components/snacksitem/Snacksitems"
import Allitems from "./components/shops/allitems/Allitems"
import Fashioncat from "./components/fashioncat/Fashioncat"
import Beddingscat from "./components/beddingscat/Beddingscat"
import Drinkscat from "./components/drinkscat/Drinkscat"
import Electroniccat from "./components/electroniccat/Electroniccat"
import Kitchenwarecat from "./components/kitchenwarecat/Kitchenwarecat"
import Snackscat from "./components/snackscat/Snackscat"
import Healthcat from "./components/healthcat/Healthcat"
import Beddingsallsub1 from "./components/beddingsall/beddingsallsub1/Beddingsallsub1"
import Beddingsallsub2 from "./components/beddingsall/beddingsallsub1/beddingsallsub2/Beddingsallsub2"
import Beddingsallsub3 from "./components/beddingsall/beddingsallsub1/beddingsallsub3/Beddingsallsub3"
import Drinksallsub1 from "./components/drinksall/drinksallsub1/Drinksallsub1"
import Electronicsallsub1 from "./components/electronicsall/electronicsallsub1/Electronicsallsub1"
import Electronicsallsub2 from "./components/electronicsall/electronicsallsub2/Electronicsallsub2"
import Fashionallsub1 from "./components/fashionall/fashionallsub1/Fashionallsub1"
import Fashionallsub2 from "./components/fashionall/fashionallsub2/Fashionallsub2"
import Fashionallsub3 from "./components/fashionall/fashionallsub3/Fashionallsub3"
import Kitchenallsub1 from "./components/kitchenall/kitchenallsub1/Kitchenallsub1"
import Kitchenallsub2 from "./components/kitchenall/kitchenallsub2/Kitchenallsub2"
import Snacksallsub1 from "./components/snacksall/snacksallsub1/Snacksallsub1"


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata
  const {fashionItems} = Fata
  const {electronicsItems} = Leta
  const {drinksItems} = Rata
  const {beddingsItems} = Gata
  const {kitchenwareItems} = Kata
  const {snacksItems} = Sata
  const {beautyItems} = Bata

  
 

  

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
   
    const productExit = CartItem.find((item) => item.id === product.id)
  
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
   
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
   
    const productExit = CartItem.find((item) => item.id === product.id)

     if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
       } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  
//The routes
  return (
    <>
      <Router>
        <Header CartItem={CartItem} productItems={productItems}/>
        <Routes>
          <Route path='/' element={ <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} fashionItems={fashionItems} drinksItems={drinksItems}/>} exact></Route>
          <Route path='/cart' element={  <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} exact></Route>
          <Route path='/mastershop' element={ <Master productItems={productItems} fashionItems={fashionItems} electronicsItems={electronicsItems} drinksItems={drinksItems} snacksItems={snacksItems} beddingsItems={beddingsItems} kitchenwareItems={kitchenwareItems} beautyItems={beautyItems} addToCart={addToCart} shopItems={shopItems} />} exact></Route>
          <Route path='/Terms and condition' element={<Combined />} exact />
          <Route path='/help' element={<Help />} exact />
          <Route path='/not-found' element={<ErrorMessage />} exact />
          <Route path='/cart/checkout' element={<Checkout CartItem={CartItem} />} exact />
          <Route path='/search-results' element={<Results productItems={productItems} addToCart={addToCart}/>} exact />
          <Route path = '/items/:id' element={<Items productItems={productItems} addToCart={addToCart}/>} exact />
          <Route path = '/beautyitems/:id' element={<Shopitems beautyItems={beautyItems} addToCart={addToCart}/>} exact />
          <Route path = '/beddingsitems/:id' element={<Beddingsitems beddingsItems={beddingsItems} addToCart={addToCart}/>} exact /> 
          <Route path = '/drinksitems/:id' element={<Drinksitems drinksItems={drinksItems} addToCart={addToCart}/>} exact />
          <Route path = '/electronicsitems/:id' element={<Electronicsitems electronicsItems={electronicsItems} addToCart={addToCart}/>} exact />
          <Route path = '/fashionitems/:id' element={<Fashionitems fashionItems={fashionItems} addToCart={addToCart}/>} exact />
          <Route path = '/kitchenwareitems/:id' element={<Kitchenwareitems kitchenwareItems={kitchenwareItems} addToCart={addToCart}/>} exact />
          <Route path = '/snacksitems/:id' element={<Snacksitems snacksItems={snacksItems} addToCart={addToCart}/>} exact />
          <Route path = '/allitems/:id' element={<Allitems shopItems={shopItems} addToCart={addToCart}/>} exact />
          <Route path = '/fashioncat' element={<Fashioncat fashionItems={fashionItems} addToCart={addToCart}/>} exact /> 
          <Route path = '/beddingscat' element={<Beddingscat beddingsItems={beddingsItems} addToCart={addToCart}/>} exact /> 
          <Route path = '/drinkscat' element={<Drinkscat drinksItems={drinksItems} addToCart={addToCart}/>} exact /> 
          <Route path = '/electroniccat' element={<Electroniccat electronicsItems={electronicsItems} addToCart={addToCart}/>} exact /> 
          <Route path = '/kitchenwarecat' element={<Kitchenwarecat kitchenwareItems={kitchenwareItems} addToCart={addToCart}/>} exact /> 
          <Route path = '/snackscat' element={<Snackscat snacksItems={snacksItems} addToCart={addToCart}/>} exact />  
          <Route path = '/healthcat' element={<Healthcat beautyItems={beautyItems} addToCart={addToCart}/>} exact /> 
          <Route path='/beddingsallsub1' element={<Beddingsallsub1 beddingsItems={beddingsItems}/>} exact />
          <Route path='/beddingsallsub2' element={<Beddingsallsub2 beddingsItems={beddingsItems}/>} exact />
          <Route path='/beddingsallsub3' element={<Beddingsallsub3 beddingsItems={beddingsItems}/>} exact />
          <Route path='/drinksallsub1' element={<Drinksallsub1 drinksItems={drinksItems} />} exact />
          <Route path='/electronicsallsub1' element={<Electronicsallsub1 electronicsItems={electronicsItems} />} exact />
          <Route path='/electronicsallsub2' element={<Electronicsallsub2 electronicsItems={electronicsItems} />} exact />
          <Route path='/fashionallsub1' element={<Fashionallsub1 fashionItems={fashionItems} />} exact />
          <Route path='/fashionallsub2' element={<Fashionallsub2 fashionItems={fashionItems} />} exact />
          <Route path='/fashionallsub3' element={<Fashionallsub3 fashionItems={fashionItems} />} exact />
          <Route path='/kitchenallsub1' element={<Kitchenallsub1 kitchenwareItems={kitchenwareItems} />} exact />
          <Route path='/kitchenallsub3' element={<Kitchenallsub2 kitchenwareItems={kitchenwareItems} />} exact />
          <Route path='/snacksallsub1' element={<Snacksallsub1 snacksItems={snacksItems} />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
    
  )
}

export default App
