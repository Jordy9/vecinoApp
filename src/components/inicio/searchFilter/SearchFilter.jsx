import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useResponsive } from '../../../hooks/useResponsive'

export const SearchFilter = ({ title = 'To each their home.®', secondTitle = 'Let’s find a home that’s perfect for you' }) => {

    const [searchState, setSearchState] = useState('')

    const [ respWidth ] = useResponsive()

    const navigate = useNavigate()

    const activeStyle = {
        border: 'none',
        backgroundColor: 'transparent',
        borderRadius: 0,
        textDecoration: 'none',
        borderBottom: '3px solid red',
        color: 'white',
        fontSize: (respWidth < 650) ? '14px' : '20px',
    }

    const noActiveStyle = {
        border: 'none',
        textDecoration: 'none',
        color: 'white',
        fontSize: (respWidth < 650) ? '14px' : '20px'
    }

    const routes = ['BUY', 'rentar', 'SELL', 'PRE-APPROVAL', 'JUST SOLD', 'HOME VALUE']

  return (
    <div style={{height: '100%', color: 'white'}} className='d-flex justify-content-center align-items-center'>
        <div>
            <h1 className='text-center' style={{fontSize: (respWidth < 650) ? '32px' : '56px'}}>{title}</h1>

            <p className='text-center' style={{fontSize: (respWidth < 650) ? '16px' : '20px'}}>
                {secondTitle}
            </p>

            <p>
                <Nav className='d-flex justify-content-center'>
                    {
                        routes.map((e, index) => {
                            return (
                                <div className='mx-1' key={e}>
                                    <NavLink to={`/${e}`} style={({isActive}) => isActive ? activeStyle : noActiveStyle}>
                                        <strong className='hoverBorder'>
                                            {(routes.length !== index + 1) ? `${e}, ` : `${e}`}
                                        </strong>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </Nav>
            </p>

            <div className = 'row'>
               <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center'>      
                    <form style={{position: 'relative', width: (respWidth < 650) ? 'auto' : '650px'}} className="d-flex" role="search">
                        <input className="form-control searchForm" value={searchState} onChange={({ target }) => setSearchState(target.value)} type="text" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
                        {
                            (searchState !== '')
                                &&
                            <i onClick={() => setSearchState('')} style={{position: 'absolute', color: 'black', fontSize: '24px', right: 70, marginTop: '11px', cursor: 'pointer'}} className="bi bi-x-lg searchX"></i>
                        }
                        <button onClick={() => navigate('/rentar-busqueda')} type='buttom' style={{position: 'absolute', color: 'red', fontSize: '24px', right: 0, marginTop: '0.35rem', marginRight: '0.35rem'}} className='btn btn-search-danger'>
                            <i className="bi bi-search text-white"></i>
                        </button>
                    </form>
               </div>
            </div>
        </div>
    </div>
  )
}
