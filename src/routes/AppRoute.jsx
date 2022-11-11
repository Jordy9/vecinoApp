import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Inicio, Renta, RentaPorId } from '../components/inicio/pages/pages'
import { Navb } from '../components/inicio/navbar/Navb'
import { RentaPorFiltro } from '../components/inicio/pages/RentaPorFiltro'

export const AppRoute = () => {
  return (
    <>
        <Navb />
        
        <Routes>
            <Route path='/inicio' element = { <Inicio /> } />
            <Route path='/rentar' element = { <Renta /> } />
            <Route path='/rentar-busqueda' element = { <RentaPorFiltro /> } />
            <Route path='/rentar/:id' element = { <RentaPorId /> } />

            <Route path='/*' element = { <Navigate to = 'inicio' /> } />
        </Routes>
    </>
  )
}
