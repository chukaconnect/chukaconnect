import React from "react"
import "./Header.css"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, productItems}) => {
  return (
    <>
      <Search CartItem={CartItem} productItems={productItems} />
      <Navbar />

    </>
  )
}

export default Header