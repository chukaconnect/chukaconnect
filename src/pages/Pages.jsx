import React, {lazy, Suspense} from "react"
import {Helmet} from 'react-helmet'
import Header from "../common/header/Header"
import Home from "../components/MainPage/Home"
//import FlashDeals from "../components/flashDeals/FlashDeals"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
//import Fashionsub4 from "../components/fashioncat/Fashionsub4"
//import Drinkssub1 from "../components/drinkscat/Drinkssub1"
//import Arrivals from "../components/toAdd/Arrivals"

import './pages.css'
import { useState } from "react"

const LazyComponent = lazy(() => import('../components/flashDeals/FlashDeals'));
const ArrivalComponent = lazy(() => import('../components/toAdd/Arrivals'));
const Fashionsub4Component = lazy(() => import('../components/fashioncat/Fashionsub4'));
const Drinkssub1Component = lazy(() => import('../components/drinkscat/Drinkssub1'));

const Pages = ({ productItems,addToCart,CartItem,drinksItems,fashionItems }) => {

  
  return (
    <>
     <Header CartItem={CartItem} productItems={productItems}/>
      <Home CartItem={CartItem} />
      <Suspense fallback={<div className='spinner'></div>}>
      <LazyComponent productItems={productItems} addToCart={addToCart} />
      </Suspense>
      <div className="Forfashionlovers" >
        <div className="Arrivalsheader">
        <h2>New Arrivals</h2>
        </div>
        <Suspense fallback={<div className='spinner'></div>}>
        <ArrivalComponent productItems={productItems}/>
        </Suspense>
      </div>

      <div className="Forfashionlovers" >
        <div className="Fashionheader">
        <h2>For Fashion Lovers</h2>
        </div>
        <Suspense fallback={<div className='spinner'></div>}>
        <Fashionsub4Component fashionItems={fashionItems}/>
        </Suspense>
      </div>

      <div className="Forfashionlovers" >
        <div className="Drinksheader">
        <h2>Get some drink</h2>
        </div>
        <Suspense fallback={<div className='spinner'></div>}>
        <Drinkssub1Component drinksItems={drinksItems}/>
        </Suspense>
      </div>

      <div className="seperatorheader">
      </div>
      <Annocument />
      <Wrapper />
      <Helmet>
  <title>Chuka connect</title>
  <meta name="description"
  content="An online sales platform where you can shop around chuka university.We are your certified online store" />
  <meta name="keywords" content="Chuka, connect, flash deals" />
  <link rel="canonical" href="https://chukaconnect.com/"/>
</Helmet>
    </>
  )
}

export default Pages