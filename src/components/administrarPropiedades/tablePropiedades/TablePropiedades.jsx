import React from 'react'
import { useNavigate } from 'react-router-dom'

export const TablePropiedades = () => {

  const navigate = useNavigate()

  return (
    <div className='table-responsive'>
        <table className="table table-hover">
            <thead>
                <tr className='text-center'>
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
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <button onClick={() => navigate('/crearPropiedad')} className='btn btn-primary'>
                          <i className="bi bi-eye"></i>
                        </button>

                        <button className='btn btn-success mx-2'>
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
  )
}
