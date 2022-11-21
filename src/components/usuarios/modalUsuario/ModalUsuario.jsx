import React from 'react'
import { Modal } from 'react-bootstrap'
import { ModalInformacionGeneral } from './ModalInformacionGeneral'
import { ModalPerfil } from './ModalPerfil'
import { ModalTable } from './ModalTable'

export const ModalUsuario = ({ show, setShow }) => {

    const handleClose = () => {
        setShow(false)
    }

  return (
    <Modal fullscreen show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div onClick={handleClose} className='goBack' style={{display: 'flex', alignItems: 'center'}}>
                <i style={{fontSize: '22px'}} className="bi bi-chevron-left"></i>
                <span style={{fontSize: '18px'}} className='ml-1'>Atras</span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className = 'row'>

                <div className = 'col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                    <ModalPerfil />
               </div>

                <div className = 'col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9'>
                    <ModalTable setShow = {setShow} />
                </div>
            </div>

            <div className = 'row'>
               <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <ModalInformacionGeneral />
               </div>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn btn-danger'>Desactivar usuario</button>
        </Modal.Footer>
    </Modal>
  )
}
