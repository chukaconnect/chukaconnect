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
const Healthcatsub1 = ({  beautyItems}) => {

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
    navigate(`/beautyitems/${id}`);
  }
 

  return (
    <>
      <Slider {...settings}>
        { beautyItems.map(( beautyItems) => {
          return (
            <div className='box' key={beautyItems.id} 
            onClick={()=> handleItemClick(beautyItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={ beautyItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{ beautyItems.name}</h3>
                  <div className='price'>
                    <h4>ksh { beautyItems.price}.00 </h4>
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

export default Healthcatsub1