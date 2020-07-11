import React from 'react'
import InformacionPublicacion from './InformacionPublicacion'
import CartaDetalles from './CartaDetalles'
import { IsAuth } from '../../hooks'

const PublicacionTemplate = () => {
  const { role } = IsAuth()
  return (
    <div className="row">
      <InformacionPublicacion />
      <CartaDetalles />
    </div>
  )
}

export default PublicacionTemplate
