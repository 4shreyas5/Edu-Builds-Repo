import React from 'react'
import banner from './banner.png'
import './Dashboard.css'
import bgImage from './bgImage.png'

function dashboard() {
  return (
    <div className='dashboard'>
      <img src={banner} class="img-fluid" alt="..."/>

      <div class="card mt-5 ml-5 mr-5 ">
  <div class="card-body bg-url('C:\Users\akansha\Desktop\React\education-ak\src\components\bgImage.png')">
    <h5 class="card-title">Today's Schedule</h5>
    <p class="card-text">...</p>
  </div>
</div>
      <div class="card mt-5 ml-5 mr-5">
  <div class="card-body">
    <h5 class="card-title">Links:</h5>
    <p class="card-text">...</p>
  </div>
</div>
      <div class="card mt-5 ml-5 mr-5">
  <div class="card-body">
    <h5 class="card-title">Weekly Schedule</h5>
    <p class="card-text">...</p>
    
  </div>
</div>
<img src={bgImage} class="img-fluid" alt="..."/>
<footer className='footer'>
    MADE BY UNPLUGGED AND WIRELESS
</footer>

    </div>
  )
}

export default dashboard
