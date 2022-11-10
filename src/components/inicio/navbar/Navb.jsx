import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import vecino from '../../../assets/VecinoLogo.ico'

export const Navb = () => {
  return (
    <Navbar bg='white' variant='light' expand="lg">
      <Navbar.Brand 
        to='/inicio' 
        style = {{margin: 0, padding: 0}} 
        className='d-flex align-items-center'
      >
        <img 
          src={vecino} 
          className='img-fluid' 
          style={{cursor: 'pointer', width: 'auto', height: '40px', marginLeft: '100px'}} 
          alt="Logo vecino" 
        />
      </Navbar.Brand>

      <Container>
        <Nav>
          <NavLink to='/rentar' style={{border: '1px solid', fontSize: '15px'}} className='btn ml-5'>
            Rentar
          </NavLink>
        </Nav>

        <Nav className='ml-auto'>
          <button style={{border: '1px solid', fontSize: '15px'}} className='btn mr-5'>Administrar propiedades</button>
          <button className='btn btn-button-login'>Login</button>
        </Nav>
      </Container>
    </Navbar>
  )
}
