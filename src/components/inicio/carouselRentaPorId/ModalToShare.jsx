import React from 'react'
import { Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const ModalToShare = ({ show, setShow }) => {

    const handleClose = () => {
        setShow(false)
    }

  return (
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header style={{borderBottom: 'none'}} closeButton>
          <Modal.Title>Email to Your Friends</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className = 'row'>
               <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                  <img style={{width: '100%', height: '250px'}} src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
               </div>

                <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='mt-2 pb-2'>
                        <div style={{display: 'flex', alignItems: 'center', fontSize: '18px'}}>
                            <span className='badgee2'></span>

                            For Rent
                        </div>
                        
                        <NavLink>Get Moving Quotes</NavLink>

                        <div className='my-2'>
                            <strong style={{fontSize: '30px'}}>$479,000</strong>
                        </div>

                        <div>
                            3 bed 2 bath 1564 sqft
                        </div>

                        <br />

                        <div style={{lineHeight: '18px'}}>
                            <div className='mb-2' style={{fontWeight: 'bold', fontSize: '22px'}}>
                                1513 Mooreland Blvd
                            </div>

                            <div className='text-muted' style={{fontSize: '22px'}}>
                                Brentwood, TN 37027
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = 'row mt-4'>
               <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className="input-group">
                        <span className="input-group-text bg-white" id="basic-addon1">Para:</span>
                        <input type="email" placeholder='Separe los correos por una coma' className='form-control' aria-describedby="basic-addon1" />
                    </div>
               </div>
            </div>

            <div className = 'row mt-3'>
               <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group'>
                    <input type="email" placeholder='Escribe tu correo' className='form-control' />
               </div>

               <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group'>
                    <input type="email" placeholder='Escribe tu nombre' className='form-control' />
               </div>
            </div>

            <div className = 'row'>
               <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                    <label>Mensaje</label>
                    <textarea style={{resize: 'none'}} name="" id="" cols="30" rows="3" className='form-control'></textarea>
               </div>
            </div>

            <div className="form-group">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label">Enviarme promociones a mi correo electrónico</label>
                </div>
            </div>

            <div className = 'row'>
               <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-right'>
                  <button className='btn btn-button-login form-control'>Enviar</button>
               </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}
