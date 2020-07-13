import React from 'react'
import InformacionPublicacion from './InformacionPublicacion'
import CartaDetalles from './CartaDetalles'
import { isAuth } from '../../hooks'

const PublicacionTemplate = () => {
  const { role } = isAuth()
  return (
    <div className="row">
      <InformacionPublicacion />
      <CartaDetalles />
    </div>
  )
}

export default PublicacionTemplate
