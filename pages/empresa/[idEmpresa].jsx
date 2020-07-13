import React, { useEffect } from 'react'

// My Components
import MasterPage from '../../src/layout/MasterPage'
import { Container, ScreenLoader } from '../../src/elements'
import { EmpresaTemplate } from '../../src/components'
import { isAuth } from '../../src/hooks'
import Router from 'next/router'

const IdEmpresa = () => {
  const { autenticado, role } = isAuth()

  useEffect(() => {
    if (autenticado !== null) {
      autenticado ? null : Router.push('/app')
    }
  }, [autenticado])

  if (!autenticado) {
    return <ScreenLoader />
  }
  return (
    <MasterPage>
      <Container>
        <EmpresaTemplate />
      </Container>
    </MasterPage>
  )
}

export default IdEmpresa
