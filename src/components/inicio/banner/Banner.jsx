import React from 'react'
import { SearchFilter } from '../searchFilter/SearchFilter'

export const Banner = () => {
  return (
    <div>
        <div 
            style={{
                backgroundImage: 'url(https://www.10wallpaper.com/wallpaper/2560x1600/1303/night_beach_landscape-beautiful_scenic_HD_wallpaper_2560x1600.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '400px',
            }}
        >
            <SearchFilter />
        </div>
    </div>
  )
}
