import React, { useState } from 'react'
import { ModalUsuario } from '../modalUsuario/ModalUsuario'

export const TableUsuarios = () => {

    const [show, setShow] = useState(false)

  return (
    <div className='table-responsive'>
        <table className="table table-hover">
            <thead>
                <tr className='text-center'>
                  <th scope="col">Foto</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo electrónico</th>
                  <th scope="col">Estado</th>
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

        <ModalUsuario show = {show} setShow = {setShow} />
    </div>
  )
}
