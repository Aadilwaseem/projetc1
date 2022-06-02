import React from 'react'
import './Social.css'
import image from './social_links.svg'
function Social() {
  return (
    <div>
        <div className='soc'>
            <div className='text'>
                <h1 className='inline'> Social Media Links</h1>
                <h2 className='inline2'>Feel Free To Contact Us </h2>
            </div>
        <img className='image' src= {image}  height="600px" width="1200px" />
        <button className='button'>Gets Started</button>
        </div>
    </div>
  )
}

export default Social