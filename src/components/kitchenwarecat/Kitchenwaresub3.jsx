import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
const Kitchenwaresub3 = ({ kitchenwareItems}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.9,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const navigate = useNavigate();
 
  const handleItemClick =(id)=> {
    navigate(`/kitchenwareitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Slider {...settings}>
        {kitchenwareItems.slice(6,12).map((kitchenwareItems) => {
          return (
            <div className='box' key={kitchenwareItems.id} 
            onClick={()=> handleItemClick(kitchenwareItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={kitchenwareItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{kitchenwareItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {kitchenwareItems.price}.00 </h4>
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

export default Kitchenwaresub3