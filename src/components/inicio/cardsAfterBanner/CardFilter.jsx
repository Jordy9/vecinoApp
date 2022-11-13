import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardItemFilter } from './CardItemFilter'

export const CardFilter = () => {

  return (
    <div className='my-5'>
      <div className='cardContainerFilter1'>
        <h4>New Listings in Brentwood, TN</h4>

        <div style={{lineHeight: '10px', fontSize: '15px'}}>
          <NavLink>View All 45 New Listings</NavLink>
        </div>
      </div>

      <div className = 'row'>
        {
          [1, 2, 3, 4].map(e => {
            return (
              <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-4'>
                <CardItemFilter />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
