import React, { useEffect } from 'react'

import MasterPage from '../../src/layout/MasterPage'
import { Container, ScreenLoader } from '../../src/elements'
import { FormularioNuevaVacante } from '../../src/components'
import { IsAuth } from '../../src/hooks'
import Router from 'next/router'

const NuevoEmpleo = () => {
  const { autenticado, role } = IsAuth()

  useEffect(() => {
    autenticado && role === 'business' ? null : Router.push('/app')
  }, [autenticado])

  if (!autenticado) {
    return <ScreenLoader />
  }

  return (
    <MasterPage>
      <Container>
        <FormularioNuevaVacante />
      </Container>
    </MasterPage>
  )
}

export default NuevoEmpleo
