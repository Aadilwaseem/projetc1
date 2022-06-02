import React from 'react'
import'./Footer.css'
import image from './logo_light.svg'
function Footer() {
  return (
    <div>
        <div className='links'>        
                <img className='logo'   src={image} ></img>   
                <a href='' className='slink' id='flink'>Privacy Policy  </a>
                <a href='' className='slink'>Terms and Conditions </a>
                <a href='' className='slink'>Contact Us</a>
                <a href='' className='slink'>Careers</a>
        </div>   
    </div>
  )
}

export default Footer