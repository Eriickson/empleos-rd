import React from 'react'
import MasterPage from '../../../layout/MasterPage'
import { Container } from '../../../elements'
import MenuEditarUsuario from './MenuEditarUsuario'

export const EditarPerfilUsuarioTemplate = () => {
  return (
    <MasterPage>
      <Container>
        <MenuEditarUsuario />
      </Container>
    </MasterPage>
  )
}
