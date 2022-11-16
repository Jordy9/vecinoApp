import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useResponsive } from '../../../hooks/useResponsive'
import { ModalShowSearchFilter } from '../modalFilters/ModalShowSearchFilter'

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

    let serachFilterToMap = []

    serachFilterToMap = ['Hola que tal', 'Como estas', 'Todo bien', 'Todo nice']?.filter(e => (searchState === '') ? e : (e.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(searchState.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && e)

    const [showCustomDatalist, setshowCustomDatalist] = useState(false)

    const handleClick = (e) => {
        setSearchState(e)
        setshowCustomDatalist(false)
    }

    const handleInputChange = (target) => {
        setSearchState(target.value)
        if (respWidth < 992) {
            setShow(true)
        }
    }

    const [show, setShow] = useState(false)

    const handleCustomDatalist = () => {
        setshowCustomDatalist(true)
        if (respWidth < 992) {
            setShow(true)
        }
    }

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
                        <input onClick={handleCustomDatalist} className="form-control searchForm" value={searchState} onChange={({ target }) => handleInputChange(target)} type="text" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
                        {
                            (searchState !== '')
                                &&
                            <i onClick={() => setSearchState('')} style={{position: 'absolute', color: 'black', fontSize: '24px', right: 70, marginTop: '12.5px', cursor: 'pointer'}} className="bi bi-x-lg searchX"></i>
                        }
                        <button onClick={() => navigate('/rentar-busqueda')} type='buttom' style={{position: 'absolute', color: 'red', fontSize: '24px', right: 0, marginTop: '0.35rem', marginRight: '0.35rem'}} className='btn btn-search-danger'>
                            <i className="bi bi-search text-white"></i>
                        </button>

                        {
                            (showCustomDatalist && searchState?.length !== 0)
                                &&
                            <div
                                style={{
                                    backgroundColor: 'white', 
                                    color: 'black', 
                                    width: '100%', 
                                    position: 'absolute', 
                                    border: '1px solid black', 
                                    borderRadius: '20px', 
                                    top: 65,
                                    maxHeight: '300px'
                                }}
                            >
                                {
                                    serachFilterToMap.map(e => {
                                        return (
                                            <div className='customDatalist px-2 my-2' onClick={() => handleClick(e)} key={e}>{e}</div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </form>
               </div>
            </div>
        </div>

        {
            (show)
                &&
            <ModalShowSearchFilter 
                show = { show } 
                setShow = { setShow }
                navigate = {navigate}
                respWidth = {respWidth}
                searchState = {searchState}
                setSearchState = {setSearchState}
                serachFilterToMap = {serachFilterToMap}
                handleClick = {handleClick}
            />
        }

    </div>
  )
}
