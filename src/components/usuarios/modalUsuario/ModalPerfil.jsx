import React from 'react'

export const ModalPerfil = () => {
  return (
    <>
        <h3>Información del usuario</h3>

        <div className = 'row px-2' style={{height: '540px'}}>
            <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 shadow rounded'>

                <div className='d-flex align-items-center justify-content-center'>
                    <img src="https://ap.rdcpix.com/792b074cc4a43b4ad21a5037b839877al-m174693264od-w480_h360.webp" style={{width: '250px', height: '250px', clipPath: 'circle()'}} alt="" />
                </div>
                
                <div className="text-center my-2">
                    <button className='btn btn-primary'>Seleccionar foto</button>
                </div>

                <div className = 'row'>
                    <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                        <label>Nombre completo</label>
                        <input type="text" placeholder='Fulano de tal' className='form-control' />
                    </div>
                </div>

                <div className = 'row'>
                    <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group'>
                        <label>Correo electrónico</label>
                        <input type="text" placeholder='Fulanodetal@gmail.com' className='form-control' />
                    </div>
                </div>

                <button className='btn btn-primary form-control mb-4'>Guardar</button>

            </div>

        </div>
    </>
  )
}
