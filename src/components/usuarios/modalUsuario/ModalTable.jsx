import React, { useState } from 'react'
import { ModalViewPropiedad } from './ModalViewPropiedad'

export const ModalTable = () => {

    const [show, setShow] = useState(false)
    
  return (
    <>
        <h3>Listado de propiedades</h3>
        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 shadow rounded' style={{height: '540px'}}>
            <div className='table-responsive'>
                <table className="table table-hover">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Imagen</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Tipo de propiedad</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        [1, 2, 3].map(e => {
                        return (
                            <tr key={e} className='text-center'>
                                <td><img src="https://ap.rdcpix.com/792b074cc4a43b4ad21a5037b839877al-m174693264od-w480_h360.webp" style={{width: '100px', height: '70px'}} alt="" /></td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            <td>
                                <button onClick={() => setShow(true)} className='btn btn-primary'>
                                <i className="bi bi-eye"></i>
                                </button>

                                <button className='btn btn-success mx-2 my-1'>
                                {(e) === 3 ? 'Ocultar' : 'Publicar'}
                                </button>

                                <button className='btn btn-danger'>
                                <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                            </tr>
                        )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>

        <ModalViewPropiedad show={show} setShow = {setShow} />
    </>
  )
}
