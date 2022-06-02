import React from 'react'
import image from './Cyber-Security-PNG-Transparent-HD-Photo.png'
import './LandingPage.css'
function LandingPage() {
  return (
      
    <div>
        
        <div className='Landing'>
        <div >
        <h1 className='text1'>Cyber Security</h1>
        <h2 className='text2'>is much more than a metter of information technology</h2>
        </div>
            <img src= {image} alt="Image here" height="400px" width="500px" />
        </div>
        <button className='button'>Start Free Trial</button>
        
    </div>
  )
}

export default LandingPage