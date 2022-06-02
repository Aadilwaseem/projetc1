import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='div'>
        <div className='ctn'>
        <div className='s-ctn'>
        <h1 className='c1'>Personal</h1>
        <h2 className='c2'>Special first packet for all</h2> <hr width="290px"></hr>
        <h2 className='c3'> $8/Month </h2>
        <h2 className='c4'>Up to 5 page each group</h2>
        <h2 className='c4'>Up to 10 group page</h2>
        <h2 className='c4'>5 Days group page saved</h2>
        <button className='button'>Start Free Trial</button>
        
        </div>
        <div className='s-ctn' id='ss'>
        <h1 className='c1'>Regular</h1>
        <h2 className='c2'>Recommended for personal pro</h2>
        <h2 className='c3'>$20/Month</h2>
        <h2 className='c4'>Up to 15 page each group</h2>
        <h2 className='c4'>Download page up to 20 page</h2>
        <h2 className='c4'> Up to 10 group page</h2>
        <h2 className='c4'>15 Days group page saved</h2>
        <button className='button'>Start Free Trial</button>
        

        </div>
        <div className='s-ctn'>
            <h1 className='c1'>Premium</h1>
            <h2 className='c2'>Packet for Startup & Company</h2>
            <h2 className='c3'>$48/Month</h2>
            <h2 className='c4'>Unlimited group pages</h2>
            <h2 className='c4'>Unlimited download page</h2>
            <h2 className='c4'>Unlimited page each group</h2>
            <h2 className='c4'>Customize sorting group pages</h2>
            <h2 className='c4'>Customize group page name</h2>
            <h2 className='c4'>30 Days group page saved</h2>
        

        </div>
        <button className='button'>Start Free Trial</button>

        </div>
        <button className='button'>Start Free Trial</button>


    </div>
  )
}

export default Card