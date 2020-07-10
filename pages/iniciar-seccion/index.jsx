import React from 'react'
import MasterPageLogin from '../../src/layout/MasterPageLogin'
import { Container } from '../../src/elements'
import { FormularioIniciarSeccion } from '../../src/components'

const IniciarSeccion = () => {
  return (
    <MasterPageLogin title="Usuario">
      <Container>
        <FormularioIniciarSeccion />
      </Container>
    </MasterPageLogin>
  )
}

export default IniciarSeccion
