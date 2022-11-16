import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TablePropiedades } from '../tablePropiedades/TablePropiedades'

export const AdministrarPropiedades = () => {

  const navigate = useNavigate()
  
  return (
    <div className='p-4'>
      <h1>Listado de propiedades</h1>
      <div className='text-right py-4'>
        <button onClick={() => navigate('/crearPropiedad')} className='btn btn-success'>Crear propiedad</button>
      </div>
      <TablePropiedades />
    </div>
  )
}
