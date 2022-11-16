import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import vecino from '../../../assets/VecinoLogo.ico'
import { useResponsive } from '../../../hooks/useResponsive'
import { ModalLoginCreateAccount } from '../carouselRentaPorId/ModalLoginCreateAccount'
import { Sidebar } from '../sidebar/Sidebar'

export const Navb = () => {

  const [show, setShow] = useState(false)

  const [ respWidth ] = useResponsive()

  const activeStyle = {
    border: 'none',
    borderRadius: '0',
    borderBottom: '3px solid red'
  }

  const noActiveStyle = {
    border: '1px solid', 
    // fontSize: '15px'
  }

  const [showLoginCreate, setShowLoginCreate] = useState(false)

  return (
    <Navbar bg='white' variant='light' style={{borderBottom: '1px solid gray'}} expand="lg">


      <Navbar.Brand 
        style = {{margin: 0, padding: 0}} 
        className='d-flex align-items-center'
        >
        {
          (respWidth < 992)
            &&
          <i style = {{cursor: 'pointer', color: 'black', fontSize: '25px', marginLeft: '20px'}} onClick={() => setShow(true)} className="bi bi-list"></i>
        }
        <NavLink to='/inicio'>
          <img 
            src={vecino} 
            className='img-fluid' 
            style={{cursor: 'pointer', width: 'auto', height: '40px', marginLeft: (respWidth < 992) ? '40px' : '100px'}} 
            alt="Logo vecino" 
          />
        </NavLink>
      </Navbar.Brand>

      {
        (respWidth < 992)
          ?
        <Sidebar show={show} setShow={setShow} />
          :
        <Container>
          <Nav>
            <NavLink to='/rentar' style={({isActive}) => isActive ? activeStyle : noActiveStyle} className='btn ml-5 buttonRent'>
              Rentar
            </NavLink>
          </Nav>

          <Nav className='ml-auto' style={{marginRight: (respWidth < 992) ? '40px' : '100px'}}>
            <button style={{border: '1px solid', fontSize: '15px'}} className='btn mr-5'>
              <NavLink to='/administrarPropiedades' style={{color: 'black', textDecoration: 'none'}}>Administrar propiedades</NavLink>
            </button>
            <button onClick={() => setShowLoginCreate(true)} className='btn btn-button-login'>Login</button>
          </Nav>
        </Container>
      }

      {
        (respWidth < 992)
          &&
        <Nav style={{marginRight: '20px'}}>
          <button onClick={() => setShowLoginCreate(true)} className='btn btn-button-login-user-icon' style={{fontSize: '24px'}}>
            <i className="bi bi-person"></i>
          </button>
        </Nav>
      }

      <ModalLoginCreateAccount  showLoginCreate = {showLoginCreate} setShowLoginCreate = {setShowLoginCreate} />

    </Navbar>
  )
}
