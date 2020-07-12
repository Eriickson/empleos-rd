import React, { useEffect } from 'react'
import { EditarPerfilUsuarioTemplate } from '../../../src/components'
import { IsAuth } from '../../../src/hooks'
import Router from 'next/router'
import { ScreenLoader } from '../../../src/elements'

const EditarPerfilUsuario = () => {
  const { autenticado, role } = IsAuth()

  useEffect(() => {
    if (autenticado !== null) {
      autenticado && role === 'user' ? null : Router.push('/app')
    }
  }, [autenticado])

  if (!autenticado) {
    return <ScreenLoader />
  }
  return <EditarPerfilUsuarioTemplate />
}

export default EditarPerfilUsuario
