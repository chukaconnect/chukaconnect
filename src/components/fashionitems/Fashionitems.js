import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import Header from '../../common/header/Header';

const Fashionitems = (props) => {

  function shareLocation (){
    var name = fashionItems.name
    var message = 'Check out this item on Chuka connect: ' + name + '\n' + window.location.href ;
    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(message));
  }

  const navigate = useNavigate();
  const goMaster = () => {
     navigate('/drinkscat')
  }
  const mystyle = {
    width: "100%",
    height: "450px",
   
  }
  const {id} = useParams();
  const fashionItems = props.fashionItems.find((fashionItems) => fashionItems.id === id)
  const { CartItem, productItems } = props;

  if(!fashionItems) {
    return <><Header CartItem={CartItem} productItems={productItems}/><div>Product not found</div></>
  }
  
  return (
    <>
    <Header CartItem={CartItem} productItems={productItems}/>
    <div key={fashionItems.id} className="wrap-cover">
      <div className='display-cover'>
        <div className='image-display-cover'>
          <img src={fashionItems.cover} alt={fashionItems.name}/>
        </div>
        <div className='product-name-price'>
          <h2>{fashionItems.name}</h2>
          <p>Shop {fashionItems.name} now with just a click of a button below from Chuka connect</p>
          <button onClick={() => props.addToCart(fashionItems)}>Add to cart(Ksh {fashionItems.price})</button>
          <h1>Delivery of {fashionItems.name} will just take a few minutes upon confirming checkout from the cart</h1>
          <FontAwesomeIcon className='fontawesome' icon={faShareSquare} onClick={shareLocation}/>
        </div>
      </div>
      <div className='description-specification'>
<div className='product-description'>
  <h2>Product Description</h2>
  <p>{fashionItems.description}</p>
</div>
<div className='product-specification'>
  <h2>Product Specification</h2>
  <p>{fashionItems.specifications}</p>
</div>
</div>
<div className='barner'>
  <div className='barner-img' style={mystyle}>
    <button onClick={goMaster}>Visit the page for amazing offers</button>
  </div>
</div>
    </div>
  </>
  )
}

export default Fashionitems
