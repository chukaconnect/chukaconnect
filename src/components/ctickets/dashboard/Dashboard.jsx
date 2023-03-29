import React from 'react'
import './Dash.css'

const Dashboard = () => {
  return (
   <>
   <section>
    <div className='event-header'>
<h1>C-tickets</h1>
<div className='dropdown'>
      <h3>Account</h3>
      <div className='dropdown-content'>
        <h4>Profile</h4>
        <h4>Logout</h4>
      </div>
    </div>
<div className='event-name'>
  <h2>@Lennny</h2>
</div>
<div className='holder-desc'>
  <h>Event's Dashboard</h>
  <p>Get all the insights on <span>Attendees</span> & <span>Tickets</span> all in one place</p>
</div>
    </div>
    <div className='insight-msg'>
      <h2>Get All The Insights</h2>
    </div>
    <div className='insights'>
<div className='rev'>
  <h5>Revenue</h5>
  <div className='rev-img'></div>
  <div className='rev-curr'>
    <h6>Current</h6>
    <p>Ksh 0</p>
  </div>
  <div className='rev-t'>
    <h6>Total</h6>
    <p>Ksh 0</p>
  </div>
</div>

<div className='tick'>
<h5>Tickets Ordered</h5>
<div className='tick-img'></div>
<div className='tick-curr' >
<h6>Current</h6>
    <p>100 tickets</p>
</div>
  <div className='tick-t' >
  <h6>Total</h6>
    <p>400 tickets</p>
  </div>
</div>

<div className='canc'>
<h5>Cancelled Tickets</h5>
<div className='canc-img'></div>
<div className='canc-curr'>
<h6>Current</h6>
    <p>20 tickets</p>
</div>
  <div className='canc-t'>
  <h6>Total</h6>
    <p>400 tickets</p>
  </div>
</div>

<div className='atten'>
<h5>Attendees</h5>
<div className='atten-img'></div>
<div className='atten-curr'>
<h6>Current</h6>
    <p>500 people</p>
</div>
  <div className='atten-t'>
  <h6>Total</h6>
    <p>400 people</p>
  </div>
</div>
    </div>
   </section>
   </>
  )
}

export default Dashboard
