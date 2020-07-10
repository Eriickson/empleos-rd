import React from 'react'
import MasterPageLogin from '../../src/layout/MasterPageLogin'
import { Container } from '../../src/elements'
import { FormularioIniciarSeccionEmpresa } from '../../src/components'

const Empresa = () => {
  return (
    <MasterPageLogin title="empresa">
      <Container>
        <FormularioIniciarSeccionEmpresa />
      </Container>
    </MasterPageLogin>
  )
}

export default Empresa
