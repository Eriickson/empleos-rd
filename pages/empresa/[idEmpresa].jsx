import React from 'react'

// My Components
import MasterPage from '../../src/layout/MasterPage'
import { Container } from '../../src/elements'
import { EmpresaTemplate } from '../../src/components'

const IdEmpresa = () => {
  return (
    <MasterPage>
      <Container>
        <EmpresaTemplate />
      </Container>
    </MasterPage>
  )
}

export default IdEmpresa
