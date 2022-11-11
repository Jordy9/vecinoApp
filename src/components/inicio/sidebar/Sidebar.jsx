import React from 'react'
import { Offcanvas } from 'react-bootstrap'

export const Sidebar = ({ show, setShow }) => {

    const handleClose = () => {
      setShow(false)
    }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          I will not close if you click outside of me.
          </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
