import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardItem = () => {

    const navigate = useNavigate()

  return (
    <div 
        style={{cursor: 'pointer'}} 
        className = 'cardMouse'
        onClick={() => navigate('/rentar/:47145154515')}
    >
        <div style={{position: 'relative'}}>
            <img 
                src="https://ap.rdcpix.com/f282661392fa3e652f9f0a93bd5baeb3l-m3325926915od-w480_h360.webp" 
                className='img-fluid' 
                alt="" 
                style={{borderTopLeftRadius: '4px', borderTopRightRadius: '4px'}}
            />
            <div 
                style={{
                    fontSize: '15px', 
                    position: 'absolute', 
                    zIndex: 1045, 
                    top: 15, 
                    left: 15, 
                    color: 'white', 
                    backgroundColor: 'blueviolet', 
                    padding: '3px', 
                    borderRadius: '4px'
                }}
            >
                NEW - 23 HOURS AGO
            </div>
            <i 
                style={{
                    fontSize: '40px', 
                    position: 'absolute', 
                    zIndex: 1045, 
                    bottom: -5, 
                    right: 15, 
                    color: 'white', 
                    padding: '3px', 
                    borderRadius: '4px'
                }} className="bi bi-heart"
            >
            </i>
        </div>
        
        <div 
            className='shadow' 
            style={{borderBottomLeftRadius: '4px'}}
        >
            <div className='px-3 mt-2 pb-2'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <span className='badgee'></span>

                    Single-Family Home
                </div>

                <div>
                    <strong style={{fontSize: '20px'}}>$479,000</strong>
                </div>

                3 bed 2 bath 1564 sqft
                <br />

                <div style={{lineHeight: '18px'}}>
                    <div>
                        1513 Mooreland Blvd
                    </div>

                    <div>
                        Brentwood, TN 37027
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
