import React from 'react'

export const CardItemFilter = () => {
  return (
    <div 
        style={{cursor: 'pointer'}} 
        className = 'cardMouse'
    >
        <div style={{position: 'relative'}}>
            <img 
                src="https://ap.rdcpix.com/f282661392fa3e652f9f0a93bd5baeb3l-m3325926915od-w480_h360.webp" 
                className='img-fluid'
                alt="" 
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
                <svg 
                    aria-hidden="true" 
                    data-testid="complex-svg-heart" 
                    focusable="false" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    width="40" 
                    xmlns="http://www.w3.org/2000/svg" 
                    tabindex="-1" 
                    className="heartBg"
                    style={{
                        fontSize: '40px', 
                        position: 'absolute', 
                        zIndex: 1045, 
                        bottom: 4, 
                        right: 15, 
                        color: 'white', 
                        padding: '3px', 
                        borderRadius: '4px',
                        height: '46px',
                        width: '46px'
                    }}
                >
                    <path d="M20 8.3c4.9-8 18.5-5.9 18.5 5l-.1 1.9c-.8 4.6-4 9.3-8.9 14a66.6 66.6 0 0 1-8.7 7l-.7.6-.8-.5a27.6 27.6 0 0 1-2.8-1.7c-2-1.4-4-3-6-4.7-5.6-5-9-10.3-9-15.8A10 10 0 0 1 20 8.3z" data-testid="complex-svg-heart-path" fill="rgba(0,0,0,0.4)" stroke="#FFFFFF" stroke-width="3"></path>
                </svg>
            {/* <i 
                style={{
                    fontSize: '40px', 
                    position: 'absolute', 
                    zIndex: 1045, 
                    bottom: -5, 
                    right: 15, 
                    color: 'white', 
                    padding: '3px', 
                    borderRadius: '4px'
                }} 
                className="bi bi-heart"
            >
            </i> */}
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

                <strong>3 bed 2 bath 1564 sqft</strong>
                <br />

                <div style={{lineHeight: '18px'}}>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                        <div>
                            <div>
                                1513 Mooreland Blvd
                            </div>
                            
                            <div>
                                Brentwood, TN 37027
                            </div>
                        </div>

                        <button className='btn btn-outline-primary'>
                            Contact property
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
