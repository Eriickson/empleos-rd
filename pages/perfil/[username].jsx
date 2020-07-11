import React, { useEffect, useState } from 'react'
import { Perfil as P } from '../../src/components'
import { IsAuth } from '../../src/hooks'
import Router from 'next/router'
import { ScreenLoader } from '../../src/elements'

const Perfil = () => {
  const { autenticado } = IsAuth()

  useEffect(() => {
    autenticado ? null : Router.push('/app')
  }, [autenticado])

  if (!autenticado) {
    return <ScreenLoader />
  }

  return <P />
}
export default Perfil
