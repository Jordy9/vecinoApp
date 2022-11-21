import React from 'react'
import { TableUsuarios } from '../tableUsuarios/TableUsuarios'

export const Usuarios = () => {
  return (
    <div className='p-4'>
      <h1>Listado de Usuarios</h1>

      <TableUsuarios />
    </div>
  )
}
