import React, { useEffect } from 'react'
import MasterPage from '../../../src/layout/MasterPage'
import { Container, ScreenLoader } from '../../../src/elements'
import { EditarEmpresaTemplate } from '../../../src/components'
import Router from 'next/router'
import { isAuth } from '../../../src/hooks'

const EditarEmpresa = () => {
  const { autenticado, role } = isAuth()

  useEffect(() => {
    if (autenticado !== null) {
      autenticado && role === 'business' ? null : Router.push('/app')
    }
  }, [autenticado])

  if (!autenticado) {
    return <ScreenLoader />
  }

  return (
    <MasterPage>
      <Container>
        <EditarEmpresaTemplate />
      </Container>
    </MasterPage>
  )
}

export default EditarEmpresa
