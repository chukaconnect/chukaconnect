import React, { useState} from "react"
import {useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faAddressBook,faListAlt } from '@fortawesome/free-solid-svg-icons';
import Model from "../model/Model"

const Navbar = () => {
  const [modalOpen,setModalOpen] = useState(false);
  const navigate = useNavigate()
  const goHome = () =>{
    navigate('/');
  };
  const goContact = () =>{
    navigate('/contact');
  };
  const goCategory = () =>{
    setModalOpen(true);
    
  }

  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li onClick={goHome}>
              <FontAwesomeIcon icon={faHome} color="black" />
              </li>
              <li onClick={goContact}>
              <FontAwesomeIcon icon={faAddressBook} color='green'/>
              </li>
              <li onClick={goCategory}>
              <FontAwesomeIcon icon={faListAlt} color='gray'/>
              </li>
            </ul>
            {modalOpen && <Model setOpenModal={setModalOpen} />}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar