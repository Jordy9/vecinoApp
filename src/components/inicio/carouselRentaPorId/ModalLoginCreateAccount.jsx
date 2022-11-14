import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export const ModalLoginCreateAccount = ({ showLoginCreate, setShowLoginCreate }) => {

    const handleClose = () => {
        setShowLoginCreate(false)
    }

    const [createAccount, setCreateAccount] = useState(false)

  return (
    <Modal size='md' show={showLoginCreate} onHide={handleClose}>
        <Modal.Header style={{borderBottom: 'none'}} closeButton></Modal.Header>
        <h3 className='text-center px-2'>
            {
                (!createAccount)
                    ?
                'Iniciar sesión'
                    :
                'Registro'
            }
        </h3>
        <Modal.Body className='px-4'>

            {
                (!createAccount)
                    ?
                <>
                    <div className = 'row'>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                            <label>Correo electrónico</label>
                            <input type="email" placeholder='Ejemplo@gmail.com' className='form-control' name="" id="" />
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                            <label>Contraseña</label>
                            <input type="password" placeholder='********' className='form-control' name="" id="" />
                        </div>
                    </div>
                </>
                    :
                <>
                    <div className = 'row'>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                            <label>Nombre</label>
                            <input type="text" placeholder='Nombre' className='form-control' name="" id="" />
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                            <label>Apellido</label>
                            <input type="text" placeholder='Apellido' className='form-control' name="" id="" />
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                            <label>Correo electrónico</label>
                            <input type="email" placeholder='Ejemplo@gmail.com' className='form-control' name="" id="" />
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                            <label>Contraseña</label>
                            <input type="password" placeholder='********' className='form-control' name="" id="" />
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                            <label>Confirmar contraseña</label>
                            <input type="password" placeholder='********' className='form-control' name="" id="" />
                        </div>
                    </div>
                </>
            }
            


            <div className = 'row'>
               <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-right'>
                  <button className='btn btn-button-login form-control'>Continuar</button>
               </div>
            </div>
            
            <span 
                style={{textDecoration: 'underline', cursor: 'pointer'}} 
                onClick={() => setCreateAccount(!createAccount)} 
                className='d-flex justify-content-center text-black mt-3'
            >
                {
                    (!createAccount)
                        ?
                    '¿Aún no tienes una cuenta? Registrate'
                        :
                    '¿Ya tienes tienes una cuenta? Inicia sesión'
                }
            </span>
        </Modal.Body>
    </Modal>
  )
}
