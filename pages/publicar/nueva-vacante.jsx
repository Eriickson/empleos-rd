import React, { useEffect } from 'react'

import MasterPage from '../../src/layout/MasterPage'
import { Container, ScreenLoader } from '../../src/elements'
import { FormularioNuevaVacante } from '../../src/components'
import { isAuth } from '../../src/hooks'
import Router from 'next/router'

const NuevoEmpleo = () => {
  const { autenticado, role } = isAuth()

  useEffect(() => {
    if (autenticado !== null) {
      autenticado && role === 'business' ? null : Router.push('/app')
      console.log(autenticado)
    }
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
