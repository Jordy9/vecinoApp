import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardItem } from './CardItem'

export const Card = () => {
  return (
    <div className='my-5' style={{marginLeft: '100px', marginRight: '100px'}}>
      <h4>New Listings in Brentwood, TN</h4>

      <div style={{lineHeight: '10px', fontSize: '15px'}}>
        <NavLink>View All 45 New Listings</NavLink>
      </div>

      <div className = 'row'>
        {
          [1, 2, 3, 4].map(e => {
            return (
            <div key={e} className = 'col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-4'>
              <CardItem />
            </div>
            )
          })
        }
      </div>
    </div>
  )
}
