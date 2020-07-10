import React from 'react'
import MasterPage from '../src/layout/MasterPage'
import { Container } from '../src/elements'
import { FormularioBuscarEmpleo } from '../src/components'

const Index = () => {
  return (
    <MasterPage>
      <Container>
        <FormularioBuscarEmpleo />
      </Container>
    </MasterPage>
  )
}

export default Index
