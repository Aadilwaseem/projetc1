
import React from 'react'
import './Navbar.css'
import image from './logo_light.svg'

function Navbar() {
  return (
    <div>
                <div className='links'>        
                <img className='logo'   src={image}></img>  
                <a href='' className='slink'>About</a>
                <a href='' className='slink'>How it work</a>
                <a href='' className='slink'>Pricing</a>
                <a href='' className='slink'>Solution</a>
                <a href='' className='slink'>Features</a>
                
                <button className='Btn' id='fbt'>Login</button>
                <button className='Btn' id='lbtn'>Register</button>
              
            </div>
        
        </div>
    
  )
}

export default Navbar