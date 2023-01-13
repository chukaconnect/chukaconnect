import React, {useEffect} from "react"
import {Helmet} from 'react-helmet'
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import Fashionsub4 from "../components/fashioncat/Fashionsub4"
import Drinkssub1 from "../components/drinkscat/Drinkssub1"
import Arrivals from "../components/toAdd/Arrivals"
import LoadingPage from "../common/loadingPage/LoadingPage"
import './pages.css'
import { useState } from "react"



const Pages = ({ productItems,addToCart,CartItem,drinksItems,fashionItems }) => {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() =>{
    const appLoaded = localStorage.getItem('appLoaded');

    if(appLoaded){
      setIsLoading(false)
    } else{ 
        setIsLoading(true);
        localStorage.setItem('appLoaded',true);
    }
  },[]);

  if(isLoading){
    return(
      <LoadingPage />
    )
  }
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <div className="Forfashionlovers" >
        <div className="Arrivalsheader">
        <h2>New Arrivals</h2>
        </div>
        <Arrivals productItems={productItems}/>
      </div>

      <div className="Forfashionlovers" >
        <div className="Fashionheader">
        <h2>For Fashion Lovers</h2>
        </div>
        <Fashionsub4 fashionItems={fashionItems}/>
      </div>

      <div className="Forfashionlovers" >
        <div className="Drinksheader">
        <h2>Get some drink</h2>
        </div>
        <Drinkssub1 drinksItems={drinksItems}/>
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