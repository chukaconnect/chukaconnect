import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const Drinksitems = (props) => {
  function shareLocation (){
    var name = drinksItems.name
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
  const drinksItems = props.drinksItems.find((drinksItems) => drinksItems.id === id)

  if(!drinksItems) {
    return <div>Product not found</div>
  }
  
  return (
    <>
    <div key={drinksItems.id} className="wrap-cover">
      <div className='display-cover'>
        <div className='image-display-cover'>
          <img src={drinksItems.cover} alt={drinksItems.name}/>
        </div>
        <div className='product-name-price'>
          <h2>{drinksItems.name}</h2>
          <p>Shop {drinksItems.name} now with just a click of a button below from Chuka connect</p>
          <button onClick={() => props.addToCart(drinksItems)}>Add to cart(Ksh {drinksItems.price})</button>
          <h1>Delivery of {drinksItems.name} will just take a few minutes upon confirming checkout from the cart</h1>
          <FontAwesomeIcon className='fontawesome' icon={faShareSquare} onClick={shareLocation}/>
        </div>
      </div>
      <div className='description-specification'>
<div className='product-description'>
  <h2>Product Description</h2>
  <p>{drinksItems.description}</p>
</div>
<div className='product-specification'>
  <h2>Product Specification</h2>
  <p>{drinksItems.specifications}</p>
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

export default Drinksitems
