import React from 'react'

import MasterPage from '../../src/layout/MasterPage'
import { Container } from '../../src/elements'
import { FormularioNuevaVacante } from '../../src/components'

const NuevoEmpleo = () => {
  return (
    <MasterPage>
      <Container>
        <FormularioNuevaVacante />
      </Container>
    </MasterPage>
  )
}

export default NuevoEmpleo
