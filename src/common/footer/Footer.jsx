import React from "react"
import "./style.css"
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faMapMarkerAlt,faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  const handleClick = () => {
    window.location.href = 'tel:0741474318'
  };
const navigate = useNavigate()
  const goTerms = () =>{
    navigate('/Terms and condition');
  };
  const goHelp = () =>{
    navigate('/help');
  };
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Chuka <span> connect</span></h1>
            <p>Chuka connect a platform that enable students around chuka university purchase goods at their own comfort.We are here to serve you!</p>
            <div className='icon d_flex'>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li onClick={goTerms}>Terms & Conditions</li>
              <li onClick={goTerms}>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li onClick={goHelp}><FontAwesomeIcon icon={faQuestionCircle} /> Help Center </li>
              <li onClick={goHelp}>How to Buy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> : Past slaughter house </li>
              <li><FontAwesomeIcon icon={faEnvelope} /> : chukaconnect@gmail.com</li>
              <li onClick={handleClick}><FontAwesomeIcon icon={faPhone} /> : 0741474318</li>
              <li><a href="https://www.instagram.com/chukaconnect/?next=%2F" rel='_blank'><FontAwesomeIcon icon={faInstagram} /> : Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="copyright"><p>&copy;2023.Chuka connect</p></div>
      </footer>
    </>
  )
}

export default Footer