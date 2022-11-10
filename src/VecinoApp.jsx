import React from 'react'
import { AppRoute } from './routes/AppRoute'
import { BrowserRouter } from 'react-router-dom'

export const VecinoApp = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}
