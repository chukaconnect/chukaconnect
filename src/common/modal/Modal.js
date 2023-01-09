import React from "react";
import {useNavigate} from 'react-router-dom'
import "./Modal.css";

function Modal({ setOpenModal }) {

  const navigate = useNavigate()
  const goShop = () =>{
    setOpenModal(false);
    navigate('/mastershop');
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">

        </div>
        <div className="title">
          <h1>You have successfully placed an order!</h1>
        </div>
        <div className="body">
          <p>Wait for a minute we make a call and get your item delivered in a few!
            Click the button to continue shopping with us
          </p>
        </div>
        <div className="footer">
          <button
          onClick={goShop}
            id="cancelBtn"
          >
            Ok!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;