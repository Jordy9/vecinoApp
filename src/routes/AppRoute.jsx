import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navb } from '../components/inicio/navbar/Navb'
import { Inicio } from '../components/inicio/pages/Inicio'
import { Renta } from '../components/inicio/pages/Renta'

export const AppRoute = () => {
  return (
    <>
        <Navb />
        
        <Routes>
            <Route path='/inicio' element = { <Inicio /> } />
            <Route path='/rentar' element = { <Renta /> } />

            <Route path='/*' element = { <Navigate to = 'inicio' /> } />
        </Routes>
    </>
  )
}
