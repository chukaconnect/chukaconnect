import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'
import {useNavigate} from 'react-router-dom'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.9,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const filteredArray = productItems.filter(productItems => productItems.name === 'hp 2560p' || productItems.name === 'essentials hood' || productItems.name === 'general meakins' 
  || productItems.name === 'duvet' || productItems.name === 'customizable black hood' || productItems.name === 'piece grilled chicken' || productItems.name === 'medium plate size chips');

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/items/${id}`);
    window.scrollTo(0, 0);
  }
 
  return (
    <>
      <Slider {...settings}>
        {filteredArray.map((productItems) => {
          return (
            <div className='box frash' key={productItems.id} 
            onClick={()=> handleItemClick(productItems.id)}
            >
              <div className='product mtop'>
              <div className='img'>
                  <img src={productItems.cover} alt='' />
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>ksh {productItems.price}.00 </h4>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard