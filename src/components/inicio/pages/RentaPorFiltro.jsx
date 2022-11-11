import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { CardFilter } from '../cardsAfterBanner/CardFilter'

export const RentaPorFiltro = () => {

    const [searchState, setSearchState] = useState('')

  return (
    <div className='cardContainerFilter mt-4'>
        <div className = 'row cardContainerFilter1'>
           <div className = 'col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2'>
                <form style={{position: 'relative'}} className="d-flex" role="search">
                    <input className="form-control searchFormFilter" value={searchState} onChange={({ target }) => setSearchState(target.value)} type="text" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
                    {
                        (searchState !== '')
                            &&
                        <i onClick={() => setSearchState('')} style={{position: 'absolute', color: 'black', fontSize: '18px', right: 45, marginTop: '10px', cursor: 'pointer'}} className="bi bi-x-lg searchX"></i>
                    }
                    <button type='buttom' style={{position: 'absolute', color: 'red', right: 0, marginTop: '2px'}} className='btn btn-search-danger'>
                        <i className="bi bi-search text-white"></i>
                    </button>
                </form>
           </div>
           <div className = 'col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-8 col-xxl-8 d-flex align-items-center'>
                <Dropdown className="d-inline" autoClose={false}>
                    <Dropdown.Toggle style={{borderColor: 'black', fontSize: '15px'}} variant='outline-secondary' id="dropdown-autoclose-false">
                        Habitaciones
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose={false}>
                    <Dropdown.Toggle style={{borderColor: 'black', fontSize: '15px'}} variant='outline-secondary' id="dropdown-autoclose-false">
                        Baños
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose={false}>
                    <Dropdown.Toggle style={{borderColor: 'black', fontSize: '15px'}} variant='outline-secondary' id="dropdown-autoclose-false">
                        Tipo propiedad
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="d-inline mx-2" autoClose={false}>
                    <Dropdown.Toggle style={{borderColor: 'black', fontSize: '15px'}} variant='outline-secondary' id="dropdown-autoclose-false">
                        Precio
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
           </div>
        </div>
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
    </div>
  )
}
