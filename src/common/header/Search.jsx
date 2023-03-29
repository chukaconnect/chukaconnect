import React,{useState} from "react"
import {useNavigate} from 'react-router-dom'
import './Header.css'



const Search = ({ CartItem,productItems}) => {
 
  const navigate = useNavigate();
const [query,setQuery] = useState('');



const handleSearch = () =>{
const matchingItems = productItems.filter(productItems => productItems.name.includes(query.toLowerCase()));

if (matchingItems && query.length  > 0 ){
  navigate(`/search-results?
  query=${query}`,{state: {matchingItems}}); 
}  else {
  navigate(`not-found`)
}
};

const handleChange = (event) =>{
  setQuery(event.target.value);
};

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  
  
 
  const goHome = () =>{
    navigate('/');
  };
  const goCart = () =>{
    navigate('/cart');
  };
  const cTickets = () =>{
    navigate('/home')
  }


  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
            <div className="logo">
            <h2 onClick={goHome}>CHUKA <span> connect</span></h2>
            </div>
<div className="search-container">
  <input 
  type="text"
  id="query"
  value={query}
  onChange={handleChange}
  placeholder="search for products..."
 
  />
  <button onClick={handleSearch}>Search</button>
</div>
        
          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle' onClick={cTickets}></i>
            <div className='cart'>
              
                <i className='fa fa-shopping-bag icon-circle' onClick={goCart}></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search