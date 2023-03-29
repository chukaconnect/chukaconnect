import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './Set.css'

function Set() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [theme, setTheme] = useState("");
  const [tickets, setTickets] = useState("");
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [day, setDay] = useState("");

  const [selectedTicketTypes, setSelectedTicketTypes] = useState([]);
  const [priceInputs, setPriceInputs] = useState({});
  const [picture, setPicture] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('Upload Event banner picture');


  function handleTicketTypeClick(event) {
    const ticketType = event.target.value;
    setSelectedTicketTypes(prevSelectedTicketTypes => {
      if (prevSelectedTicketTypes.includes(ticketType)) {
        return prevSelectedTicketTypes.filter(type => type !== ticketType);
      } else {
        return [...prevSelectedTicketTypes, ticketType];
      }
    });
  }

  function handlePriceInputChange(event) {
    const ticketType = event.target.name;
    const price = event.target.value;
    setPriceInputs(prevPriceInputs => ({
      ...prevPriceInputs,
      [ticketType]: price
    }));
  }

  function handlePictureChange(event) {
    setPicture(event.target.files[0]);
    setUploadStatus('Successfully uploaded!!');
  }

  function handleDiscard() {
    setPicture(null);
    setUploadStatus('Upload Event banner picture');
  }

  const handleNext = () => {
    if (location !== "" && theme !== "" && start !== "" && end !== "" && day !== "" && picture !== "") {
      setStep(2);
    } else {
      alert("Please enter both location and theme.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (priceInputs !== "") {
      navigate('/dashboard')
    } else {
      alert("Please enter the price.");
    }
  };

  const navigate = useNavigate();
  function goBack() {
    navigate('/create');
  }
  

  return (
    <div className="centered">

      <p onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
     </p>
       
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={step === 1 ? "50" : step === 2 ? "100" : "100"}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${step === 1 ? "50%" : step === 2 ? "100%" : "100%"}` }}
        ></div>
      </div>

      {step === 1 && (
        <form>
          <h2>Step 1: Enter Event Details</h2>
          <div className="form-group">
            <label htmlFor="location">Venue</label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Make a title for the event"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="theme">Theme</label>
            <input
              type="text"
              className="form-control"
              placeholder="Make a theme for the event"
              id="theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
            />
          </div>
      
          <div className="form-group">
      <label htmlFor="start-time">Start Time</label>
      <select
        className="form-control"
        id="start-time"
        value={start}
        onChange={(event) => setStart(event.target.value)}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const hour = i + 1;
          return (
            <option key={`start-hour-${hour}-am`} value={`${hour}:00 AM`}>
              {hour}:00 AM
            </option>
          );
        })}
        <option value="12:00 PM">12:00 PM</option>
        {Array.from({ length: 11 }).map((_, i) => {
          const hour = i + 1;
          return (
            <option key={`start-hour-${hour}-pm`} value={`${hour}:00 PM`}>
              {hour}:00 PM
            </option>
          );
        })}
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="start-time">End Time</label>
      <select
        className="form-control"
        id="start-time"
        value={end}
        onChange={(event) => setEnd(event.target.value)}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const hour = i + 1;
          return (
            <option key={`start-hour-${hour}-am`} value={`${hour}:00 AM`}>
              {hour}:00 AM
            </option>
          );
        })}
        <option value="12:00 PM">12:00 PM</option>
        {Array.from({ length: 11 }).map((_, i) => {
          const hour = i + 1;
          return (
            <option key={`start-hour-${hour}-pm`} value={`${hour}:00 PM`}>
              {hour}:00 PM
            </option>
          );
        })}
      </select>
    </div>

    <div className="form-group">
  <label htmlFor="day">Day</label>
  <DatePicker
    selected={day}
    onChange={date => setDay(date)}
    dateFormat="MMMM d, yyyy"
    minDate={new Date()}
    placeholderText="Select a day"
    
  />
</div>


<div className="form-group">

  <label className={`upload-btn ${uploadStatus === 'Successfully uploaded!!' ? 'success' : ''}`}>
    <span>{uploadStatus}</span>
    <input
      type="file"
      id="picture"
      accept="image/*"
      onChange={handlePictureChange}
    />
  </label>
  <div className="preview">
        {picture && (
          <>
            <img src={URL.createObjectURL(picture)} alt="Preview" />
            {picture && <button className="discard-btn" onClick={handleDiscard}>X</button>}
          </>
        )}
      </div> 
</div>


          <button type="button" className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </form>
      )}

{step === 2 && (
  <form>
        <div>
          <h2>Step 2: Pricing</h2>
          <div className="form-group">
            <label htmlFor="ticketType">Choose the tickets type for your event</label>
            <div className="ticket-types">
              <button className="btn btn-primary" onClick={handleTicketTypeClick} value="Advanced">Advanced Ticket</button>
              <button className="btn btn-primary" onClick={handleTicketTypeClick} value="Group of 4">A Group of 4</button>
              <button className="btn btn-primary" onClick={handleTicketTypeClick} value="Regular">Regular Ticket</button>
              <button className="btn btn-primary" onClick={handleTicketTypeClick} value="Group3">A Group of 3</button>
              <button className="btn btn-primary" onClick={handleTicketTypeClick} value="VIP">VIP</button>
              <button className="btn btn-primary" onClick={handleTicketTypeClick} value="Group of 5">A Group of 5</button>
            </div>
          </div>
          {selectedTicketTypes.map(ticketType => (
            <div className="form-group" key={ticketType}>
              <label htmlFor={`price-${ticketType}`}>{ticketType} Price:</label>
              <div className="input-group">
                <span className="input-group-text">Ksh</span>
                <input
                  type="number"
                  className="form-control"
                  id={`price-${ticketType}`}
                  name={ticketType}
                  value={priceInputs[ticketType] || ''}
                  onChange={handlePriceInputChange}
                  required
                />
              </div>
            </div>
          ))}
        </div>

        <div className="form-group">
            <label htmlFor="theme">Available Tickets</label>
            <input
              type="number"
              className="form-control"
              placeholder="How many tickets are available?"
              id="available"
              value={tickets}
              onChange={(event) => setTickets(event.target.value)}
            />
          </div>

 
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
      Save & Upload
    </button>
    <button onClick={() => setStep(1)} className="previous-btn">Previous</button>
  </form>
)}


    </div>
  );
}

export default Set;

