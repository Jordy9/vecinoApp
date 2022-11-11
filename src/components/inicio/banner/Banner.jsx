import React from 'react'
import { SearchFilter } from '../searchFilter/SearchFilter'

export const Banner = ({ title, secondTitle }) => {
  return (
    <div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'
            style={{
              backgroundImage: 'url(https://www.10wallpaper.com/wallpaper/2560x1600/1303/night_beach_landscape-beautiful_scenic_HD_wallpaper_2560x1600.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '450px'
            }}
        >
          <SearchFilter title={title} secondTitle = {secondTitle} />
        </div>
    </div>
  )
}
