import React from 'react'
import MasterPageLogin from '../../src/layout/MasterPageLogin'
import { Container } from '../../src/elements'
import { FormularioIniciarSeccion } from '../../src/components'
import AlertExample from '../../src/elements/AlertExample'

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
