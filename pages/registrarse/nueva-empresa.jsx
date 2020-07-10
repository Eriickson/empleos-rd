import React from 'react'
import Redirect from 'next/router'

// My Components
import MasterPageLogin from '../../src/layout/MasterPageLogin'
import { Container } from '../../src/elements'
import { FormularioRegistrarEmpresa } from '../../src/components'

const NuevaEmpresa = () => {
  return (
    <MasterPageLogin title="Empresas">
      <Container>
        <FormularioRegistrarEmpresa />
      </Container>
    </MasterPageLogin>
  )
}

export default NuevaEmpresa
