import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const Allitems = (props) => {
  function shareLocation (){
    var name = shopItems.name
    var message = 'Check out this item on Chuka connect: ' + name + '\n' + window.location.href ;
    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(message));
  }
 
  const navigate = useNavigate();
  const goMaster = () => {
     navigate('/mastershop')
  }
  const mystyle = {
    width: "100%",
    height: "450px",
   
  }
  const {id} = useParams();
  const shopItems = props.shopItems.find((shopItems) => shopItems.id === id)

  if(!shopItems) {
    return <div>Product not found</div>
  }
  
  return (
    <>
    <div key={shopItems.id} className="wrap-cover">
      <div className='display-cover'>
        <div className='image-display-cover'>
          <img src={shopItems.cover} alt={shopItems.name}/>
        </div>
        <div className='product-name-price'>
          <h2>{shopItems.name}</h2>
          <p>Shop {shopItems.name} now with just a click of a button below from Chuka connect</p>
          <button onClick={() => props.addToCart(shopItems)}>Add to cart(Ksh {shopItems.price})</button>
          <h1>Delivery of {shopItems.name} will just take a few minutes upon confirming checkout from the cart</h1>
          <FontAwesomeIcon className='fontawesome'icon={faShareSquare} onClick={shareLocation}/>
        </div>
      </div>
      <div className='description-specification'>
<div className='product-description'>
  <h2>Product Description</h2>
  <p>{shopItems.description}</p>
</div>
<div className='product-specification'>
  <h2>Product Specification</h2>
  <p>{shopItems.specifications}</p>
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

export default Allitems
