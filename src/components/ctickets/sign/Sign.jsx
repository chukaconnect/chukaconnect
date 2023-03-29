import React, { useState } from 'react';
import Axios from 'axios';
import './Sign.css'

function Sign() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [lusername, setLusername] = useState('');
  const [password, setPassword] = useState('');
  const [lpassword, setLpassword] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); 
  
    if (isSignUp && username.trim() === '') {
     
      setErrorMessage('Username cannot be empty.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return; 
    }

    if (!isSignUp && (lusername.trim() === '' || lpassword.trim() === '')) {
      setErrorMessage('Username and password cannot be empty.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return; 
    }

    if (isSignUp && password.trim() === '') {
     
      setErrorMessage('Password cannot be empty.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return; 
    }

    if (isSignUp && phone.trim() === '') {
     
      setErrorMessage('Phone number cannot be empty.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return; 
    }
  
    if (isSignUp && password.length < 6) {
      
      setErrorMessage('Password must be at least 6 characters.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000); 
      return; 
    }

    if (!isSignUp && lpassword.length < 6) {
      
      setErrorMessage('Password must be at least 6 characters.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000); 
      return; 
    }

       // Call handleRegister to send data to the server
       handleRegister();
  
  }
  function handleRegister() {
    if (isSignUp) {
      Axios.post("https://phpmyadmin.freedb.tech/user/sign", {
        username: username,
        phone: phone,
        password: password
      })
      .then(response => {
        // Handle success response
        console.log(response.data);
        setErrorMessage('Registration successful!');
        setTimeout(() => {
          setErrorMessage('');
        }, 4000); 
      })
      .catch(error => {
        // Handle error response
        console.log(error);
        setErrorMessage('Registration failed. Please try again.');
        setTimeout(() => {
          setErrorMessage('');
        }, 4000); 
      });
    } else {
      // Handle login request
    }
  }



  

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="sign-container">
      <h2>{isSignUp ? 'Create An Account' : 'Login'}</h2>
      {errorMessage && (
        <div id="error-message" style={{ display: 'block' }}>
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            {/* Sign-up form inputs */}
            <label htmlFor="username">Username/Organization name</label>
            <input type="text" id="username" name="username" placeholder='*username' value={username} onChange={(event) => setUsername(event.target.value)}/>
            <br />
            <label htmlFor="password">Phone Number</label>
            <input type="number" id="phone" name="phone" placeholder='*phone number' className='phone-number' value={phone} onChange={(event) => setPhone(event.target.value)}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder='*password(at least 6 characters)' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <br />
          </div>
        )}
        {!isSignUp && (
          <div>
            {/* Login form inputs */}
            <label htmlFor="username">Username/Organization name</label>
            <input type="text" id="username" name="username" placeholder='*Username' value={lusername} onChange={(event) => setLusername(event.target.value)}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder='*password(at least 6 characters)' value={lpassword} onChange={(event) => setLpassword(event.target.value)}/>
            <br />
          </div>
        )}
        <button type="submit"  className="sign-btn">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <button type="button" onClick={handleToggleForm} className="toggle-button">
        {isSignUp ? 'Already have an account?' : 'Create an account'}
      </button>
    </div>
  );
}

export default Sign;

