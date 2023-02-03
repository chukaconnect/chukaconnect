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
const Beddingssub2 = ({ beddingsItems}) => {

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
    navigate(`/beddingsitems/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Slider {...settings}>
        {beddingsItems.slice(6,11).map((beddingsItems) => {
          return (
            <div className='box'  key={beddingsItems.id} 
            onClick={()=> handleItemClick(beddingsItems.id)}>
              <div className='product mtop'>
              <div className='img'>
                 
                  <img src={beddingsItems.cover} alt='' />
               
                </div>
                <div className='product-details'>
                  <h3>{beddingsItems.name}</h3>
                  <div className='price'>
                    <h4>ksh {beddingsItems.price}.00 </h4>
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

export default Beddingssub2